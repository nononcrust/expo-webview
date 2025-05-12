import { Link } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/notifications">알림 목록</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
