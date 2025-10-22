import type { HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "openai-chat": HTMLAttributes<HTMLElement> & {
        agent?: string;
        theme?: string;
      };
    }
  }
}
