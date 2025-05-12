import { useWebViewBridge } from "@/hooks/useWebViewBridge";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const BASE_URL = "http://192.168.0.234:3000";

type SafeAreaWebViewProps = {
  uri: string;
};

export const SafeAreaWebView = ({ uri }: SafeAreaWebViewProps) => {
  const { onMessage } = useWebViewBridge();

  return (
    <SafeAreaView style={styles.container}>
      <WebView style={styles.webView} source={{ uri: BASE_URL + uri }} onMessage={onMessage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 82,
  },
  webView: {},
});
