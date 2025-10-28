import {
  ColorScheme,
  ComposerOption,
  StartScreenPrompt,
  ThemeOption,
} from "@openai/chatkit";

export const ATTACHMENT_ACCEPT: Record<string, string[]> = {
  "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
  "text/csv": [".csv"],
  "application/vnd.ms-excel": [".csv", ".xls"],
  "text/plain": [".csv"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    ".xlsx",
  ],
};

type HostedComposerAttachments = NonNullable<ComposerOption["attachments"]> & {
  uploadStrategy: { type: "hosted" };
};

export const HOSTED_COMPOSER_ATTACHMENTS: HostedComposerAttachments = {
  enabled: true,
  uploadStrategy: { type: "hosted" },
  maxSize: 50 * 1024 * 1024,
  accept: ATTACHMENT_ACCEPT,
};

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
