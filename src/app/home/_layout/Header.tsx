"use server";

import { Logo } from "@/components/shared/Logo";
import Link from "next/link";

export default async function Header() {
  return (
    <header className="w-full z-50 fixed border-b border-border-primary backdrop-blur-[20px]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
