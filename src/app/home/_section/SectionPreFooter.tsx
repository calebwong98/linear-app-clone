import { Button } from "@/components/ui/button";

export default function SectionPreFooter() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center my-24 md:my-56">
      <h3 className="text-center text-4xl lg:text-[72px] tracking-tight font-medium">
        Built for the future.
        <br />
        Available today.
      </h3>
      <div className="flex gap-3">
        <Button size={"lg"} variant={"secondary"}>
          Get Started
        </Button>
        <Button size={"lg"} variant={"outline"}>
          Contact sales
        </Button>
      </div>
    </section>
  );
}
