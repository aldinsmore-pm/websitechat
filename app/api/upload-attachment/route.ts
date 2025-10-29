import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_UPLOAD_SIZE = 50 * 1024 * 1024; // 50MB per file
const MAX_FILES = 10;
const FILE_FIELD_CANDIDATES = ["file", "upload", "attachment"] as const;

// Accept common CSV/XLS/XLSX variants browsers report
const ALLOWED = [
  "text/csv",
  "application/csv",
  "application/vnd.ms-excel",
  "text/plain",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/zip",
  "application/octet-stream",
];
const EXT_OK = /\.(csv|xlsx|xls)$/i;

function createErrorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

async function uploadToOpenAI(file: File) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY environment variable");
  }

  const fd = new FormData();
  fd.append("purpose", "assistants");
  fd.append("file", file, file.name || "file");

  const response = await fetch("https://api.openai.com/v1/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: fd,
  });

  const payload = await response.json().catch(() => undefined);
  if (!response.ok) {
    const errorMessage =
      (payload as { error?: { message?: string } } | undefined)?.error?.
        message ??
      "OpenAI file upload failed";
    throw new Error(errorMessage);
  }

  return payload as { id: string };
}

function normalizeFile(entry: FormDataEntryValue | null): File | null {
  return entry && typeof entry !== "string" ? (entry as File) : null;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const files: File[] = [];
    for (const field of FILE_FIELD_CANDIDATES) {
      for (const entry of form.getAll(field)) {
        const f = normalizeFile(entry);
        if (f) {
          files.push(f);
        }
      }
    }

    if (files.length === 0) {
      return createErrorResponse("No file uploaded", 400);
    }

    if (files.length > MAX_FILES) {
      return createErrorResponse(`Too many files (max ${MAX_FILES}).`, 400);
    }

    for (const file of files) {
      if (!file.size) {
        return createErrorResponse(`"${file.name}" is empty`, 400);
      }

      if (file.size > MAX_UPLOAD_SIZE) {
        return createErrorResponse(
          `"${file.name}" is too large. Max ${Math.floor(MAX_UPLOAD_SIZE / 1024 / 1024)}MB per file.`,
          400,
        );
      }

      if (!ALLOWED.includes(file.type) && !EXT_OK.test(file.name)) {
        return createErrorResponse(
          `"${file.name}" is unsupported. Upload .csv, .xls, or .xlsx.`,
          400,
        );
      }
    }

    const uploaded = await Promise.all(files.map(uploadToOpenAI));

    const attachments = uploaded.map((u, index) => ({
      id: u.id,
      mime_type: files[index].type || "application/octet-stream",
      name: files[index].name || "file",
      type: "file" as const,
    }));

    return NextResponse.json({ attachments }, { status: 200 });
  } catch (error) {
    console.error("upload-attachment error", error);
    const message =
      error instanceof Error ? error.message : "Upload failed. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
