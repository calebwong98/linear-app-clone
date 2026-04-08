import { Button } from "@/components/ui/button";
import AppContainer from "../_layout/AppContainer";

export default function SectionPreFooter() {
  return (
    <section>
      <AppContainer className="flex flex-col gap-10 items-center justify-center my-24 md:my-56">
        <h3 className="text-center text-4xl font-medium">
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
      </AppContainer>
    </section>
  );
}
