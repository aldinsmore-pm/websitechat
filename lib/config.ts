import {
  ColorScheme,
  ComposerOption,
  StartScreenPrompt,
  ThemeOption,
} from "@openai/chatkit";

const IMAGE_ATTACHMENT_SPECS: Array<{
  mime: string;
  extensions: string[];
}> = [{ mime: "image/*", extensions: [".png", ".jpg", ".jpeg", ".gif", ".webp"] }];

const DATA_FILE_ATTACHMENT_SPECS: Array<{
  mime: string;
  extensions: string[];
}> = [
  { mime: "text/csv", extensions: [".csv"] },
  { mime: "application/csv", extensions: [".csv"] },
  { mime: "application/vnd.ms-excel", extensions: [".csv", ".xls"] },
  { mime: "text/plain", extensions: [".csv"] },
  {
    mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    extensions: [".xlsx"],
  },
  { mime: "application/zip", extensions: [".xlsx"] },
  { mime: "application/octet-stream", extensions: [".xlsx"] },
];

const toAcceptRecord = (
  specs: Array<{ mime: string; extensions: string[] }>
): Record<string, string[]> => {
  return specs.reduce<Record<string, string[]>>((acc, spec) => {
    acc[spec.mime] = spec.extensions;
    return acc;
  }, {});
};

const toAcceptList = (specs: Array<{ mime: string; extensions: string[] }>) => {
  return specs.reduce<string[]>((acc, spec) => {
    acc.push(spec.mime);
    for (const extension of spec.extensions) {
      if (!acc.includes(extension)) {
        acc.push(extension);
      }
    }
    return acc;
  }, []);
};

export const ATTACHMENT_MAX_SIZE_BYTES = 50 * 1024 * 1024;

export const HOSTED_COMPOSER_ATTACHMENTS: NonNullable<
  ComposerOption["attachments"]
> = {
  enabled: true,
  maxSize: ATTACHMENT_MAX_SIZE_BYTES,
  accept: toAcceptRecord(IMAGE_ATTACHMENT_SPECS),
};

export const CSV_XLSX_ACCEPT = toAcceptList(DATA_FILE_ATTACHMENT_SPECS).join(",");

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Why build Digital Employees?",
    prompt: "Why build Digital Employees?",
    icon: "circle-question",
  },
  {
    label: "Where do Digital Employees deliver impact?",
    prompt: "Where do Digital Employees deliver impact?",
    icon: "circle-question",
  },
  {
    label: "How does it work?",
    prompt: "How does it work?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const GREETING = "How can I help you today?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});
