"use client";

import { bridge } from "@repo/bridge";
import { ChevronLeftIcon } from "lucide-react";
import React from "react";

type HeaderProps = {
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <header className="fixed left-0 right-0 top-0 h-[60px] bg-white">
      <div className="h-[60px] w-full" />
      <div className="relative flex h-full items-center justify-between bg-white px-3">
        <div>{left}</div>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
          {title}
        </h1>
        <div>{right}</div>
      </div>
    </header>
  );
};

type IconButtonProps = React.ComponentPropsWithRef<"button">;

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button className="flex size-8 items-center justify-center" {...props}>
      {children}
    </button>
  );
};

const Back = () => {
  return (
    <IconButton onClick={bridge.router.back}>
      <ChevronLeftIcon size={28} />
    </IconButton>
  );
};

Header.IconButton = IconButton;
Header.Back = Back;
