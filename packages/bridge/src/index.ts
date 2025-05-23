import { z } from "zod";

export type MessageType = z.infer<typeof MessageType>;
export const MessageType = z.union([z.literal("router.back"), z.literal("router.push")]);

type RouterBackMessage = {
  type: MessageType;
};

const RouterBackMessage = z.object({
  type: z.literal("router.back"),
});

const RouterPushMessage = z.object({
  type: z.literal("router.push"),
  payload: z.object({
    href: z.string(),
  }),
});

const RouterNavigateMessage = z.object({
  type: z.literal("router.navigate"),
  payload: z.object({
    href: z.string(),
  }),
});

export type BridgeMessage = z.infer<typeof BridgeMessage>;
export const BridgeMessage = z.union([RouterBackMessage, RouterPushMessage, RouterNavigateMessage]);

const postMessage = (message: BridgeMessage) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(message));
};

export const bridge = {
  router: {
    back: () => {
      postMessage({ type: "router.back" });
    },
    push: (href: string) => {
      postMessage({ type: "router.push", payload: { href } });
    },
    navigate: (href: string) => {
      postMessage({ type: "router.navigate", payload: { href } });
    },
  },
};

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}
