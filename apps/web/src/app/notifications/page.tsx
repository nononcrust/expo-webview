"use client";

import { bridge } from "@repo/bridge";
import { ChevronLeftIcon } from "lucide-react";

export default function NotificationListPage() {
  const onBack = () => {
    bridge.router.back();
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="relative flex h-[60px] w-full items-center px-3">
        <button className="flex size-8 items-center justify-center" onClick={onBack}>
          <ChevronLeftIcon size={28} />
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">알림</h1>
      </header>
      <main className="flex flex-1 items-center justify-center">Notifications</main>
    </div>
  );
}
