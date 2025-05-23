import { SafeAreaWebView } from "@/components/SafeAreaWebView";
import { useState } from "react";

export default function NotificationsScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return <SafeAreaWebView uri="/notifications" />;

  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     <ScrollView
  //       style={{ flex: 1 }}
  //       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
  //     >
  //       <View>
  //         {Array.from({ length: 20 }, (_, i) => (
  //           <Text style={{ marginTop: 30 }} key={i}>
  //             Notification {i + 1}
  //           </Text>
  //         ))}
  //       </View>
  //     </ScrollView>

  //   </SafeAreaView>
  // );
}
