"use client";

import { useMenu } from "./MenuProvider";

export default function MenuTrigger() {
  const { isOpen, toggle } = useMenu();

  return (
    <button
      onClick={toggle}
      className="relative flex h-8 w-8 items-center justify-center"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="flex flex-col items-center justify-center gap-1.5">
        <span
          className={`block h-[1.5px] w-4 rounded-full bg-text-secondary transition-all duration-300 ${
            isOpen ? "translate-y-[3.5px] rotate-45" : ""
          }`}
        />

        <span
          className={`block h-[1.5px] w-4 rounded-full bg-text-secondary transition-all duration-300 ${
            isOpen ? "-translate-y-[3.5px]  -rotate-45" : ""
          }`}
        />
      </div>
    </button>
  );
}
