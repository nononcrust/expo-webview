"use client";

import { Header } from "@/components/header";
import { TabBar } from "@/components/tab-bar";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { bridge } from "@repo/bridge";
import { BellIcon, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectValue, setSelectValue] = useState("1");

  return (
    <>
      <Header
        title="홈"
        right={
          <div className="flex gap-2">
            <IconButton
              variant="ghost"
              onClick={() => bridge.router.push("/notifications")}
              aria-label="알림"
            >
              <BellIcon />
            </IconButton>
            <IconButton
              variant="ghost"
              onClick={() => bridge.router.push("/cart")}
              aria-label="장바구니"
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
        }
      />
      <main className="mt-[136px] flex flex-col gap-4 px-4">
        <BottomSheet>
          <BottomSheet.Trigger asChild>
            <Button>바텀시트 열기</Button>
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
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index}>
            <Button>버튼</Button>
          </div>
        ))}
      </main>
      <TabBar activeTab="home" />
    </>
  );
}
