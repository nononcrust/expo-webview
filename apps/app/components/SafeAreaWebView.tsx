import { useWebViewBridge } from "@/hooks/useWebViewBridge";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const BASE_URL = "http://192.168.0.234:3000";

type SafeAreaWebViewProps = {
  uri: string;
};

export const SafeAreaWebView = ({ uri }: SafeAreaWebViewProps) => {
  const { onMessage } = useWebViewBridge();

  return (
    <WebView
      pullToRefreshEnabled
      style={styles.webView}
      source={{ uri: BASE_URL + uri }}
      onMessage={onMessage}
      decelerationRate={0.998}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
