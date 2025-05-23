"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <div>
      <Header left={<Header.Back />} title="알림" />
      <main>
        <ul>
          {Array.from({ length: 100 }, (_, index) => (
            <li key={index} className="flex h-16 items-center justify-center">
              장바구니 {index + 1}
            </li>
          ))}
        </ul>
        <div className="fixed bottom-0 left-0 right-0 bg-white px-4 pb-[32px]">
          <Button className="w-full" size="xlarge">
            결제하기
          </Button>
        </div>
      </main>
    </div>
  );
}
