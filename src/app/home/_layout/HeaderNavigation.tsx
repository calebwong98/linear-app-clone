import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const productLinks = [
  {
    title: "Intake",
    href: "/",
    description: "Make your product operations self-driving",
  },
  {
    title: "Build",
    href: "/",
    description: "Move work forward across teams and agents",
  },
  {
    title: "Monitor",
    href: "/",
    description: "Understand progress at scale",
  },
  {
    title: "Plan",
    href: "/",
    description: "Plan and navigate from idea to launch",
  },
  {
    title: "Diffs",
    href: "/",
    description: "Make code review effortless",
  },
  {
    title: "Integrations",
    href: "/",
    description: "Collaborate across tools",
  },
];

const resourceLinks = [
  {
    title: "About",
    href: "/",
    description: "Meet the team",
  },
  {
    title: "Developers",
    href: "/",
    description: "Build on the Linear API",
  },
  {
    title: "Switch to Linear",
    href: "/",
    description: "Migration guide",
  },
  {
    title: "Careers",
    href: "/",
    description: "We're hiring",
  },
  {
    title: "Security",
    href: "/",
    description: "Safe, secure, and private",
  },
  {
    title: "Download",
    href: "/",
    description: "Get the desktop app",
  },
  {
    title: "",
    href: "/",
    description: "",
  },
  {
    title: "Docs",
    href: "/",
    description: "How to use Linear",
  },
  {
    title: "Mobile",
    href: "/",
    description: "Get the mobile app",
  },
];

export default function HeaderNavigation() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent className="p-2">
              <div
                className={cn(
                  "grid grid-cols-[repeat(3,256px)] border border-border-primary bg-card rounded-md p-3 gap-x-6",
                  "[&>div:nth-child(3n-1)]:border-l [&>div:nth-child(3n)]:border-l [&>div:nth-child(3n-1)]:border-border-primary [&>div:nth-child(3n)]:border-border-primary [&>div:nth-child(3n-1)]:pl-6 [&>div:nth-child(3n)]:pl-6",
                )}
              >
                {productLinks.map((link) => (
                  <div key={link.title}>
                    <NavigationMenuLink
                      href={link.href}
                      className="flex h-auto flex-col items-start gap-1 rounded-md px-4 py-3"
                    >
                      <span className="flex items-center gap-2 text-[13px] text-text-tertiary">
                        {link.title}
                      </span>
                      <span className="text-[13px] text-text-primary text-wrap w-42">
                        {link.description}
                      </span>
                    </NavigationMenuLink>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center p-4 pb-2.75">
                <Button className="text-text-primary">
                  New: Web forms for Linear Asks
                </Button>
                <Button variant="ghost">
                  <span className="text-link-primary">Changelog</span>
                </Button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent className="p-2">
              <div
                className={cn(
                  "grid grid-cols-[repeat(3,256px)] border border-border-primary bg-card rounded-md p-3 gap-x-6",
                  "[&>div:nth-child(3n-1)]:border-l [&>div:nth-child(3n)]:border-l [&>div:nth-child(3n-1)]:border-border-primary [&>div:nth-child(3n)]:border-border-primary [&>div:nth-child(3n-1)]:pl-6 [&>div:nth-child(3n)]:pl-6",
                )}
              >
                {resourceLinks.map((link) => (
                  <div key={link.title}>
                    <NavigationMenuLink
                      href={link.href}
                      className="flex h-auto flex-col items-start gap-1 rounded-md px-4 py-3"
                    >
                      <span className="flex items-center gap-2 text-[13px] text-text-tertiary">
                        {link.title}
                      </span>
                      <span className="text-[13px] text-text-primary text-wrap w-42">
                        {link.description}
                      </span>
                    </NavigationMenuLink>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/customers">Customers</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden lg:block">
            <NavigationMenuLink href="/changelog">Changelog</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    </>
  );
}
