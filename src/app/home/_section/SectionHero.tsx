import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="w-full">
      <div className="h-33 sm:h-23 lg:h-50"></div>
      <div className="px-2">
        <h1 className="text-[36px] sm:text-[56px] lg:text-[4rem] leading-[1.17] sm:leading-[1.1] font-medium tracking-tighter text-text-primary">
          <span>
            The product <br className="sm:hidden" /> development <br /> system
            for teams <br className="md:hidden" /> and agents
          </span>
        </h1>
        <div className="lg:flex justify-between items-end">
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-text-tertiary">
            Purpose-built for planning and building
            <br className="sm:hidden" /> products.
            <br className="hidden sm:block xl:hidden" /> Designed for the AI
            era.
          </p>
          <Link
            href={"/"}
            className="hidden sm:flex text-[15px] items-center gap-2.5 mt-5 transition-all duration-300 hover:brightness-125"
          >
            <div className="bg-link-hover p-1.5 rounded-full">
              <div className="bg-link-primary size-1.5 rounded-full"></div>
            </div>
            <h2>Issue tracking is dead</h2>
            <div className="flex items-center">
              <p className="text-text-tertiary px-0.5">linear.app/next</p>{" "}
              <ArrowRight className="text-text-tertiary size-4" />
            </div>
          </Link>
        </div>
      </div>

      <div className="h-9 sm:h-17.5"></div>

      <div className="relative w-full h-[50vh]">
        <div className="bg-linear-2 from-[#5c6063] to-75% to-background absolute w-[calc(100vw-15px)] xl:w-[calc(100vw-25px)] max-w-480 h-full bottom-0 left-1/2 -translate-x-1/2 xl:rounded-b-md">
          <Image
            src="/Glow.png"
            loading="lazy"
            fill
            alt="Glow"
            objectFit="cover"
          />
        </div>

        <div className="absolute top-0 left-0 bg-background border border-border-tertiary w-[1346px] h-[30vh] rounded-lg"></div>
      </div>
    </section>
  );
}
