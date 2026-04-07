"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMenu } from "./MenuProvider";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

const menuSections = [
  {
    title: "System",
    links: [
      { label: "Intake", href: "/" },
      { label: "Plan", href: "/" },
      { label: "Build", href: "/" },
      { label: "Diffs", href: "/" },
      { label: "Monitor", href: "/" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Integrations", href: "/" },
      { label: "Pricing", href: "/" },
      { label: "Changelog", href: "/" },
      { label: "Documentation", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "About", href: "/" },
      { label: "Customers", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/" },
      { label: "Now", href: "/" },
      { label: "Method", href: "/" },
      { label: "Switch", href: "/" },
    ],
  },
];

export default function Menu() {
  const { isOpen, setIsOpen } = useMenu();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Sheet open={isOpen && !isDesktop} onOpenChange={setIsOpen} modal={false}>
      <SheetTrigger></SheetTrigger>
      <SheetContent
        className="inset-0 h-full w-full data-[side=right]:w-full data-[side=right]:sm:max-w-none data-[side=right]:border-none"
        showCloseButton={false}
        onInteractOutside={(e) => e.preventDefault()}
        aria-describedby={undefined}
      >
        <nav className="mt-18 flex flex-1 flex-col px-6 py-8.5 gap-8 overflow-y-auto">
          {menuSections.map((section) => (
            <div key={section.title} className="">
              <SheetTitle className="mb-5 text-sm text-text-tertiary">
                {section.title}
              </SheetTitle>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-medium text-text-primary transition-colors hover:text-text-tertiary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
