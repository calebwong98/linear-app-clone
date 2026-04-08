import { cn } from "@/lib/utils";

export default function AppContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-(--homepage-max-width) mx-auto w-full px-4 sm:px-7 lg:px-2.5 xl:px-11.5 pt-18",
        className,
      )}
    >
      {children}
    </div>
  );
}
