"use client";

import { TabBar } from "@/components/tab-bar";

export default function MenuPage() {
  return (
    <>
      <main className="flex h-dvh items-center justify-center">Menu</main>
      <TabBar activeTab="menu" />
    </>
  );
}
