import type { DetailedHTMLProps, HTMLAttributes } from "react";

type OpenAIChatAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  agent?: string;
  theme?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "openai-chat": OpenAIChatAttributes;
    }
  }

  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "openai-chat": OpenAIChatAttributes;
      }
    }
  }
}

export {};
