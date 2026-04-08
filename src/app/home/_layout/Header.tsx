"use server";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AppContainer from "./AppContainer";
import MenuTrigger from "./MenuTrigger";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HeaderNavigation from "./HeaderNavigation";

export default async function Header() {
  return (
    <header className="w-full z-99 fixed border-b border-border-primary backdrop-blur-[20px]">
      <AppContainer className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 mr-auto -ml-2 px-2 py-1 rounded-sm"
        >
          <Logo type="header" />
        </Link>

        <div className=" hidden md:flex items-center">
          <HeaderNavigation />
          <div className="mx-1.5 w-px h-4 bg-border-primary lg:mx-4"></div>
        </div>

        <div className="flex items-center gap-2">
          <Tooltip delayDuration={800}>
            <Button asChild>
              <TooltipTrigger>Log in</TooltipTrigger>
            </Button>
            <TooltipContent
              align="center"
              className="mt-2 px-1.5 border border-border-primary bg-background text-text-secondary"
            >
              <p>Log in</p>{" "}
              <p className="bg-border-secondary px-1.5 rounded-sm">L</p>
            </TooltipContent>
          </Tooltip>

          <Button variant={"secondary"}>Sign up</Button>
        </div>

        <div className="md:hidden ml-3">
          <MenuTrigger />
        </div>
      </AppContainer>
    </header>
  );
}
