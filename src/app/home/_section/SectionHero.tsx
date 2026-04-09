import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Inbox,
  User,
  Eye,
  Activity,
  MoreHorizontal,
  Star,
  ChevronUp,
  ChevronDown,
  Paperclip,
  Copy,
  Layers,
  Compass,
  FolderKanban,
  CircleDot,
  Zap,
  MessageSquare,
} from "lucide-react";
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
            loading="eager"
            fill
            alt="Glow"
            className="object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 bg-card border border-border-tertiary w-[1346px] rounded-lg overflow-hidden flex text-[11px]">
          {/* Left Sidebar */}
          <div className="w-[200px] shrink-0 bg-card border-r border-border-primary flex flex-col py-2.5">
            {/* Logo */}
            <Button className="w-fit bg-card">
              <Logo className="h-4" />

              <ChevronDown className="size-3 text-text-quaternary" />
            </Button>

            {/* Nav Items */}
            <div className="flex flex-col gap-0.5 px-1.5">
              <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                <Inbox className="size-3.5" />
                <span>Inbox</span>
              </div>
              <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                <User className="size-3.5" />
                <span>My issues</span>
              </div>
              <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                <Eye className="size-3.5" />
                <span>Reviews</span>
              </div>
              <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                <Activity className="size-3.5" />
                <span>Pulse</span>
              </div>
            </div>

            {/* Workspace */}
            <div className="mt-4 px-1.5">
              <p className="text-text-quaternary text-[10px] px-2 mb-1 font-medium">
                Workspace
              </p>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                  <Compass className="size-3.5" />
                  <span>Initiatives</span>
                </div>
                <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                  <FolderKanban className="size-3.5" />
                  <span>Projects</span>
                </div>
                <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                  <MoreHorizontal className="size-3.5" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Favorites */}
            <div className="mt-4 px-1.5">
              <p className="text-text-quaternary text-[10px] px-2 mb-1 font-medium">
                Favorites
              </p>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2.5 px-2 py-[3px] rounded bg-bg-translucent text-text-primary">
                  <div className="size-2.5 rounded-full bg-[#4da858]"></div>
                  <span>Faster app launch</span>
                </div>
                <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                  <Layers className="size-3.5 text-link-primary" />
                  <span>Agent tasks</span>
                </div>
                <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                  <span className="text-red-400 text-[10px] font-bold">✕</span>
                  <span>UI Refresh</span>
                </div>
                <div className="flex items-center gap-2.5 px-2 py-[3px] rounded text-text-tertiary hover:bg-bg-translucent">
                  <CircleDot className="size-3.5 text-purple-400" />
                  <span>Agents Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary">
              <div className="flex items-center gap-2">
                <span className="text-text-primary font-medium text-[12px]">
                  Faster app launch
                </span>
                <Star className="size-3 text-yellow-500 fill-yellow-500" />
                <MoreHorizontal className="size-3.5 text-text-quaternary" />
              </div>
              <div className="flex items-center gap-1.5 text-text-quaternary">
                <span className="text-[10px]">02 / 145</span>
                <ChevronUp className="size-3" />
                <ChevronDown className="size-3" />
              </div>
            </div>

            {/* Issue Content */}
            <div className="flex flex-1 min-h-0">
              <div className="flex-1 px-6 py-4 overflow-hidden">
                <h2 className="text-text-primary text-[18px] font-semibold leading-tight mb-2">
                  Faster app launch
                </h2>
                <p className="text-text-tertiary text-[11px] leading-relaxed mb-4">
                  Render UI before{" "}
                  <code className="bg-bg-quaternary px-1 py-0.5 rounded text-[10px]">
                    vehicle_state
                  </code>{" "}
                  sync when minimum required state is present, instead of
                  blocking on full refresh during iOS startup.
                </p>

                <h3 className="text-text-primary text-[13px] font-semibold mb-2">
                  Activity
                </h3>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2">
                    <div className="size-5 rounded-full bg-bg-tertiary flex items-center justify-center mt-0.5 shrink-0">
                      <Zap className="size-2.5 text-text-quaternary" />
                    </div>
                    <div>
                      <p className="text-text-tertiary">
                        <span className="font-medium text-text-secondary">
                          Linear
                        </span>{" "}
                        created the issue via{" "}
                        <span className="font-medium text-text-secondary">
                          Slack
                        </span>{" "}
                        on behalf of{" "}
                        <span className="font-medium text-text-secondary">
                          karri
                        </span>{" "}
                        · 2min ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="size-5 rounded-full bg-bg-tertiary flex items-center justify-center mt-0.5 shrink-0">
                      <CircleDot className="size-2.5 text-text-quaternary" />
                    </div>
                    <div>
                      <p className="text-text-tertiary">
                        <span className="font-medium text-text-secondary">
                          Triage Intelligence
                        </span>{" "}
                        added the label{" "}
                        <span className="bg-bg-quaternary px-1 py-0.5 rounded text-[10px]">
                          Performance
                        </span>{" "}
                        and{" "}
                        <span className="bg-bg-quaternary px-1 py-0.5 rounded text-[10px]">
                          iOS
                        </span>{" "}
                        · 2min ago
                      </p>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="flex items-start gap-2 mt-1">
                    <div className="size-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5 shrink-0 text-[9px] font-bold text-white">
                      k
                    </div>
                    <div>
                      <p className="text-text-secondary text-[11px]">
                        <span className="font-medium">karri</span> ·{" "}
                        <span className="text-text-quaternary">4 min ago</span>
                      </p>
                      <p className="text-text-tertiary mt-0.5">
                        Right now we show a spinner forever, which makes it look
                        like the car disappeared...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="size-5 rounded-full bg-green-700 flex items-center justify-center mt-0.5 shrink-0 text-[9px] font-bold text-white">
                      j
                    </div>
                    <div>
                      <p className="text-text-secondary text-[11px]">
                        <span className="font-medium">jori</span> ·{" "}
                        <span className="text-text-quaternary">just now</span>
                      </p>
                      <p className="text-text-tertiary mt-0.5">
                        @GitHub Copilot can you take a stab at this?
                      </p>
                      <p className="text-text-quaternary text-[10px] mt-0.5 flex items-center gap-1">
                        ↩ jori connected GitHub Copilot · just now
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Detail Panel */}
              <div className="w-[200px] shrink-0 border-l border-border-primary px-4 py-4 flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-text-quaternary text-[10px]">
                    ENG-2703
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Paperclip className="size-3 text-text-quaternary" />
                    <Copy className="size-3 text-text-quaternary" />
                  </div>
                </div>

                <div>
                  <p className="text-text-quaternary text-[10px] mb-1">
                    Status
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="size-3 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                      <div className="size-1 rounded-full bg-yellow-500"></div>
                    </div>
                    <span className="text-text-secondary text-[11px]">
                      In Progress
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-text-quaternary text-[10px] mb-1">
                    Priority
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-[1px]">
                      <div className="w-[2px] h-2 bg-orange-500 rounded-[1px]"></div>
                      <div className="w-[2px] h-2.5 bg-orange-500 rounded-[1px]"></div>
                      <div className="w-[2px] h-3 bg-orange-500 rounded-[1px]"></div>
                    </div>
                    <span className="text-text-secondary text-[11px]">
                      High
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-text-quaternary text-[10px] mb-1">
                    Assignee
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="size-4 rounded-full bg-green-700 flex items-center justify-center text-[8px] font-bold text-white">
                      j
                    </div>
                    <span className="text-text-secondary text-[11px]">
                      jori
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="size-4 rounded-full bg-bg-tertiary flex items-center justify-center">
                    <MessageSquare className="size-2.5 text-text-quaternary" />
                  </div>
                  <span className="text-text-secondary text-[11px]">
                    GitHub Copilot
                  </span>
                </div>
                <div>
                  <p className="text-text-quaternary text-[10px] mb-1">
                    Labels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
