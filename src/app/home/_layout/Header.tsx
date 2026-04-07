"use server";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AppContainer from "./AppContainer";

export default async function Header() {
  return (
    <header className="w-full z-50 fixed border-b border-border-primary backdrop-blur-[20px]">
      <AppContainer className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <div className="flex items-center gap-2">
          <Button>Log in</Button>
          <Button variant={"secondary"}>Sign up</Button>
        </div>

        {/* hamburger menu */}
      </AppContainer>
    </header>
  );
}
