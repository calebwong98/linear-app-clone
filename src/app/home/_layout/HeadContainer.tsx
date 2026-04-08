import { cn } from "@/lib/utils";

export default function HeadContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-(--homepage-max-width) mx-auto px-6 sm:px-9 lg:px-12 xl:px-20 py-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
