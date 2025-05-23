"use client";

import { Header } from "@/components/header";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { IconButton } from "@/components/ui/icon-button";
import { SettingsIcon } from "lucide-react";
import { useState } from "react";

export default function NotificationListPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header left={<Header.Back />} right={<Settings />} title="알림" />
      <main className="mt-[60px] flex flex-col gap-4">
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} className="flex h-16 items-center justify-center">
            알림 {index + 1}
          </div>
        ))}
      </main>
    </div>
  );
}

const Settings = () => {
  const [selectValue, setSelectValue] = useState("1");

  return (
    <BottomSheet>
      <BottomSheet.Trigger asChild>
        <IconButton aria-label="바텀시트 열기" variant="ghost">
          <SettingsIcon />
        </IconButton>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>바텀시트</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <BottomSheet.SelectGroup value={selectValue} onChange={setSelectValue}>
            <BottomSheet.SelectItem value="1">선택지</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="2">선택지</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="3">선택지</BottomSheet.SelectItem>
          </BottomSheet.SelectGroup>
        </BottomSheet.Body>
      </BottomSheet.Content>
    </BottomSheet>
  );
};
