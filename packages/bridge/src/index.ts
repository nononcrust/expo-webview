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

export type BridgeMessage = z.infer<typeof BridgeMessage>;
export const BridgeMessage = z.union([RouterBackMessage, RouterPushMessage]);

const postMessage = (message: BridgeMessage) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(message));
};

export const bridge = {
  router: {
    back: () => {
      postMessage({ type: "router.back" });
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
