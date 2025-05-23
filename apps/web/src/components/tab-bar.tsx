import { cn } from "@/lib/utils";
import { bridge } from "@repo/bridge";
import { HomeIcon, MenuIcon } from "lucide-react";

type TabBarProps = {
  activeTab: "home" | "benefits" | "shopping" | "securities" | "menu";
};

export const TabBar = ({ activeTab }: TabBarProps) => {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-10 h-[92px] pb-[16px]",
        "flex items-center justify-center gap-12",
        "border-border rounded-t-3xl border-t bg-white px-4 shadow-md",
      )}
    >
      <button
        className={cn(
          "text-subtle flex flex-col items-center gap-1",
          activeTab === "home" && "text-main",
        )}
        onClick={() => bridge.router.navigate("/")}
      >
        <HomeIcon size={24} />
        <span className="text-xs font-medium">홈</span>
      </button>
      <button
        className={cn(
          "text-subtle flex flex-col items-center gap-1",
          activeTab === "benefits" && "text-main",
        )}
      >
        <HomeIcon size={24} />
        <span className="text-xs font-medium">혜택</span>
      </button>
      <button
        className={cn(
          "text-subtle flex flex-col items-center gap-1",
          activeTab === "shopping" && "text-main",
        )}
      >
        <HomeIcon size={24} />
        <span className="text-xs font-medium">토스쇼핑</span>
      </button>
      <button
        className={cn(
          "text-subtle flex flex-col items-center gap-1",
          activeTab === "securities" && "text-main",
        )}
      >
        <HomeIcon size={24} />
        <span className="text-xs font-medium">증권</span>
      </button>
      <button
        className={cn(
          "text-subtle flex flex-col items-center gap-1",
          activeTab === "menu" && "text-main",
        )}
        onClick={() => bridge.router.navigate("/menu")}
      >
        <MenuIcon size={24} />
        <span className="text-xs font-medium">전체</span>
      </button>
    </nav>
  );
};
