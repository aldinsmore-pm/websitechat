import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_UPLOAD_SIZE = 50 * 1024 * 1024; // 50MB
const FILE_FIELD_CANDIDATES = ["file", "upload", "attachment"] as const;
const ALLOWED_MIME_TYPES = new Set([
  "text/csv",
  "application/csv",
  "application/vnd.ms-excel",
  "text/plain",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/zip",
  "application/octet-stream",
]);
const EXTENSION_ALLOW_LIST = /\.(csv|xlsx|xls)$/i;

function createErrorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

async function uploadToOpenAI(file: File) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY environment variable");
  }

  const form = new FormData();
  form.append("purpose", "assistants");
  form.append("file", file, file.name || "file");

  const response = await fetch("https://api.openai.com/v1/files", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: form,
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
  if (!entry || typeof entry === "string") {
    return null;
  }
  return entry as File;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    let file: File | null = null;
    for (const field of FILE_FIELD_CANDIDATES) {
      file = normalizeFile(formData.get(field));
      if (file) {
        break;
      }
    }

    if (!file) {
      return createErrorResponse("No file uploaded", 400);
    }

    if (file.size === 0) {
      return createErrorResponse("Uploaded file is empty", 400);
    }

    if (file.size > MAX_UPLOAD_SIZE) {
      return createErrorResponse(
        "File is too large. Maximum supported size is 50MB.",
        400,
      );
    }

    const mimeType = file.type?.toLowerCase() ?? "";
    const fileName = file.name ?? "";
    const isMimeAllowed = mimeType ? ALLOWED_MIME_TYPES.has(mimeType) : false;
    const isExtensionAllowed = EXTENSION_ALLOW_LIST.test(fileName);

    if (!isMimeAllowed && !isExtensionAllowed) {
      return createErrorResponse(
        "Unsupported file type. Upload a .csv or .xlsx",
        400,
      );
    }

    const uploaded = await uploadToOpenAI(file);

    const attachment = {
      id: uploaded.id,
      mime_type: file.type || "application/octet-stream",
      name: file.name || "file",
      type: "file" as const,
    };

    return NextResponse.json({ attachment }, { status: 200 });
  } catch (error) {
    console.error("upload-attachment error", error);
    const message =
      error instanceof Error ? error.message : "Upload failed. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
