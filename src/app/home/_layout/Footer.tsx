import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import HeadContainer from "./HeadContainer";

const footerLinks = {
  Product: [
    { label: "Intake", href: "/" },
    { label: "Plan", href: "/" },
    { label: "Build", href: "/" },
    { label: "Diffs", href: "/" },
    { label: "Monitor", href: "/" },
    { label: "Pricing", href: "/" },
    { label: "Security", href: "/" },
  ],
  Features: [
    { label: "Asks", href: "/" },
    { label: "Agents", href: "/" },
    { label: "Customer Requests", href: "/" },
    { label: "Insights", href: "/" },
    { label: "Mobile", href: "/" },
    { label: "Integrations", href: "/" },
    { label: "Changelog", href: "/" },
  ],
  Company: [
    { label: "About", href: "/" },
    { label: "Customers", href: "/" },
    { label: "Careers", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Method", href: "/" },
    { label: "Quality", href: "/" },
    { label: "Brand", href: "/" },
  ],
  Resources: [
    { label: "Switch", href: "/" },
    { label: "Download", href: "/" },
    { label: "Documentation", href: "/" },
    { label: "Developers", href: "/" },
    { label: "Status", href: "/" },
    { label: "Enterprise", href: "/" },
    { label: "Startups", href: "/" },
  ],
  Connect: [
    { label: "Contact us", href: "/" },
    { label: "Community", href: "/" },
    { label: "X (Twitter)", href: "/" },
    { label: "GitHub", href: "/" },
    { label: "YouTube", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border-primary">
      <HeadContainer className="sm:mb-12 lg:mb-0 pb-6 pt-14 sm:py-14 grid gap-y-12 grid-cols-2 sm:grid-cols-4 lg:gap-0 lg:grid-cols-6">
        <Link
          href="/"
          className="hidden sm:inline-block row-start-1 row-end-3 w-fit text-text-primary hover:opacity-50"
        >
          <Logo type="footer" />
        </Link>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="flex flex-col sm:pl-8">
            <h3 className="text-[13px] font-medium text-text-primary mb-6">
              {category}
            </h3>
            <ul className="flex flex-col gap-0.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block min-h-7 w-full text-[13px] text-text-tertiary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:hidden flex flex-col sm:pl-8">
          <h3 className="text-[13px] font-medium text-text-primary mb-6">
            Legal
          </h3>
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link
                href={"/"}
                className="block min-h-7 w-full text-[13px] text-text-tertiary hover:text-text-primary transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="block min-h-7 w-full text-[13px] text-text-tertiary hover:text-text-primary transition-colors"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="block min-h-7 w-full text-[13px] text-text-tertiary hover:text-text-primary transition-colors"
              >
                DPA
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex gap-5 mt-20 text-[13px] pl-8">
          <Link
            className="text-text-quaternary hover:text-text-tertiary"
            rel="noopener"
            href="/"
          >
            Privacy
          </Link>
          <Link
            className="text-text-quaternary hover:text-text-tertiary"
            rel="noopener"
            href="/"
          >
            Terms
          </Link>
          <Link
            className="text-text-quaternary hover:text-text-tertiary"
            rel="noopener"
            href="/"
          >
            DPA
          </Link>
        </div>
      </HeadContainer>
    </footer>
  );
}
