import { BridgeMessage } from "@repo/bridge";
import { Href, useRouter } from "expo-router";
import { WebViewMessageEvent } from "react-native-webview";

export const useWebViewBridge = () => {
  const router = useRouter();

  const onMessage = (message: WebViewMessageEvent) => {
    try {
      const bridgeMessage = BridgeMessage.parse(JSON.parse(message.nativeEvent.data));

      switch (bridgeMessage.type) {
        case "router.back":
          router.back();
          break;
        case "router.push":
          router.push(bridgeMessage.payload.href as Href);
          break;
        case "router.navigate":
          router.navigate(bridgeMessage.payload.href as Href);
          break;
        default:
          bridgeMessage satisfies never;
      }
    } catch (error) {
      console.error("Unknown Message from WebView", error);
    }
  };

  return { onMessage };
};
