import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  SearchIcon,
  EditIcon,
  GitBranch,
  Link2Icon,
  X,
  SendHorizonal,
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

        <div className="absolute top-0 left-0 bg-bg-primary border border-border-primary w-[1346px] rounded-lg overflow-hidden flex text-[13px] p-2">
          {/* Left Sidebar */}
          <div className="w-[250px] flex flex-col pr-3.5 pb-3.5 pt-2 pl-2">
            {/* Logo */}
            <div className="flex justify-between">
              <Button className="w-fit text-text-primary">
                <Logo className="h-4" />
                <ChevronDown className="size-4 text-text-quaternary" />
              </Button>
              <div className="flex gap-3 items-center">
                <SearchIcon className="size-3 text-text-tertiary" />
                <div className="p-1.25 border border-border-tertiary rounded-sm">
                  <EditIcon className="size-4 text-text-primary" />
                </div>
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col pl-2 py-3 gap-0.5">
              <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                <Inbox className="size-3.5 text-text-quaternary" />
                <span>Inbox</span>
              </div>
              <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                <User className="size-3.5 text-text-quaternary" />
                <span>My issues</span>
              </div>
              <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                <Eye className="size-3.5 text-text-quaternary" />
                <span>Reviews</span>
              </div>
              <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                <Activity className="size-3.5 text-text-quaternary" />
                <span>Pulse</span>
              </div>
            </div>

            {/* Workspace */}
            <div className="text-[13px]">
              <p className="pl-3 py-1 text-text-quaternary font-medium flex">
                Workspace
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"></path>
                </svg>
              </p>

              <div className="flex flex-col pl-2 gap-0.5">
                <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                  <Compass className="size-3.5 text-text-quaternary" />
                  <span>Initiatives</span>
                </div>
                <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                  <FolderKanban className="size-3.5 text-text-quaternary" />
                  <span>Projects</span>
                </div>
                <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                  <MoreHorizontal className="size-3.5 text-text-quaternary" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Favorites */}
            <div className="text-[13px] mt-4">
              <p className="pl-3 py-1 text-text-quaternary font-medium flex">
                Favorites
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"></path>
                </svg>
              </p>

              <div className="flex flex-col pl-2 gap-0.5">
                <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                  <CircleDot className="size-3.5 text-yellow-300" />
                  <span>Faster app launch</span>
                </div>
                <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                  <CircleDot className="size-3.5 text-text-quaternary" />
                  <span>Agent tasks</span>
                </div>
                <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                  <CircleDot className="size-3.5 text-cyan-500" />
                  <span>UI Refresh</span>
                </div>
                <div className="py-1 px-1.5  gap-2.5 flex items-center rounded text-text-secondary hover:bg-bg-translucent cursor-pointer">
                  <CircleDot className="size-3.5 text-red-400" />
                  <span>Agents Insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="rounded-md border flex-1 flex">
            <div className="flex-1">
              {/* Top Bar */}
              <div className="h-11 pr-6 pl-7.75 flex items-center justify-between border-b border-border-primary">
                <div className="flex items-center gap-2">
                  <span className="text-text-primary font-medium text-[12px]">
                    Faster app launch
                  </span>
                  <Star className="size-3 text-yellow-500 fill-yellow-500" />
                  <MoreHorizontal className="size-3.5 text-text-quaternary" />
                </div>
                <div className="flex items-center gap-1.5 text-text-quaternary">
                  <span className="">
                    <span className="text-text-tertiary">02 </span>/ 145
                  </span>
                  <ChevronUp className="size-4" />
                  <ChevronDown className="size-4" />
                </div>
              </div>

              {/* Issue Content */}
              <div className="flex-1 min-h-0 p-10 overflow-hidden">
                <h2 className="px-4 text-text-primary text-[18px] font-semibold leading-tight mb-2">
                  Faster app launch
                </h2>
                <p className="px-4 text-text-tertiary leading-relaxed mb-6">
                  Render UI before{" "}
                  <code className="bg-bg-quaternary px-1 py-0.5 rounded text-[10px]">
                    vehicle_state
                  </code>{" "}
                  sync when minimum required state is present,
                  <br /> instead of blocking on full refresh during iOS startup.
                </p>
                <h3 className="px-4 text-text-primary text-[13px] font-semibold mb-6">
                  Activity
                </h3>
                <div className="flex flex-col gap-2.5">
                  <div className="px-4 flex items-center gap-2">
                    <Zap className="size-3 text-text-quaternary" />

                    <p className="text-text-tertiary text-xs">
                      <span className="font-medium">Linear</span> created the
                      issue via <span className="font-medium">Slack</span> on
                      behalf of <span className="font-medium">karri</span> ·
                      2min ago
                    </p>
                  </div>
                  <div className="px-4 flex items-center gap-2">
                    <CircleDot className="size-3 text-text-quaternary" />

                    <p className="text-text-tertiary text-xs">
                      <span className="font-medium">Triage Intelligence</span>{" "}
                      added the label{" "}
                      <span className="font-medium py-0.5 rounded">
                        Performance
                      </span>{" "}
                      and{" "}
                      <span className="font-medium py-0.5 rounded">iOS</span> ·
                      2min ago
                    </p>
                  </div>

                  {/* Comment */}
                  <div className="mt-4 bg-card p-4 rounded-sm border border-border-primary">
                    <div className="pb-4 flex items-start gap-2 mt-1">
                      <div className="size-5 rounded-full bg-orange-600 flex items-center justify-center mt-0.5 shrink-0 text-[9px] font-bold text-white">
                        k
                      </div>
                      <div>
                        <p className="text-text-secondary text-[11px]">
                          <span className="font-medium">karri</span> ·{" "}
                          <span className="text-text-quaternary">
                            4 min ago
                          </span>
                        </p>
                        <p className="text-text-tertiary mt-0.5">
                          Right now we show a spinner forever, which makes it
                          look like the car disappeared...
                        </p>
                      </div>
                    </div>
                    <div className="border-t pt-4 flex items-start gap-2">
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

                  <div className="mt-4 bg-card p-4 rounded-sm border border-border-primary">
                    <div className="flex items-start gap-2">
                      <div className="size-5 rounded-full bg-white flex items-center justify-center mt-0.5 shrink-0 text-[9px] font-bold text-black">
                        C
                      </div>
                      <div>
                        <p className="text-text-secondary text-[11px]">
                          <span className="font-medium">GitHub Copilot</span>
                        </p>
                        <p className="text-text-tertiary mt-0.5">
                          Examining issue{" "}
                          <span className="text-text-quaternary">ENG-2703</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 px-4 mb-10">
                    <CircleDot className="size-3 text-yellow-400" />

                    <p className="text-text-tertiary text-xs">
                      <span className="font-medium">Github Copilot</span> moved
                      from{" "}
                      <span className="font-medium py-0.5 rounded">Todo</span>{" "}
                      to{" "}
                      <span className="font-medium py-0.5 rounded">
                        In Progress
                      </span>{" "}
                      · just now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Detail Panel */}
            <div className="w-[330px] shrink-0 border-l border-border-primary flex flex-col gap-3">
              <div className="h-11 flex items-center justify-between border-b border-border-primary px-4 w-full">
                <span className="text-text-quaternary">ENG-2703</span>
                <div className="flex items-center gap-1.5">
                  <Link2Icon className="size-4 text-text-quaternary" />
                  <Copy className="size-4 text-text-quaternary" />
                  <GitBranch className="size-4 text-text-quaternary" />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1.5">
                  <div className="size-3 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                    <div className="size-1 rounded-full bg-yellow-500"></div>
                  </div>
                  <span className="text-text-secondary">In Progress</span>
                </div>

                <div className="pt-4 flex items-center gap-2.5">
                  <div className="flex gap-[1px]">
                    <div className="w-[2px] h-2 bg-orange-500 rounded-[1px]"></div>
                    <div className="w-[2px] h-2.5 bg-orange-500 rounded-[1px]"></div>
                    <div className="w-[2px] h-3 bg-orange-500 rounded-[1px]"></div>
                  </div>
                  <span className="text-text-secondary">High</span>
                </div>

                <div className="pt-4 flex items-center gap-1.5">
                  <div className="size-4 rounded-full bg-green-700 flex items-center justify-center font-bold text-white">
                    j
                  </div>
                  <span className="text-text-secondary ">jori</span>
                </div>

                <div className="pt-2 flex items-center gap-1.5 mt-0.5">
                  <div className="size-4 rounded-full bg-bg-tertiary flex items-center justify-center">
                    <MessageSquare className="size-2.5 text-text-quaternary" />
                  </div>
                  <span className="text-text-secondary">GitHub Copilot</span>
                </div>

                <p className="text-text-quaternary mt-8">Labels</p>
              </div>
            </div>
          </div>

          {/* Floating Copilot Chatbox */}
          <div className="absolute bottom-6 right-12 w-[360px] bg-[#1a1a1c] border border-border-primary rounded-lg shadow-2xl text-[13px] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-primary">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-full bg-white flex items-center justify-center shrink-0 text-[9px] font-bold text-black">
                  C
                </div>
                <span className="text-text-primary font-medium">
                  GitHub Copilot
                </span>
              </div>
              <X className="size-4 text-text-quaternary cursor-pointer" />
            </div>
            {/* Body */}
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <div className="px-4 py-3 flex flex-col gap-3 text-text-tertiary leading-relaxed">
                <p>
                  I received your request and will let you know when the PR is
                  ready.
                </p>

                <p>
                  Start{" "}
                  <code className="bg-bg-quaternary px-1.5 py-0.5 rounded text-[11px] text-text-secondary">
                    github-mcp-server
                  </code>{" "}
                  MCP server
                </p>
                <p>
                  Start{" "}
                  <code className="bg-bg-quaternary px-1.5 py-0.5 rounded text-[11px] text-text-secondary">
                    playwright
                  </code>{" "}
                  MCP server
                </p>

                <p>
                  I&apos;ll start by exploring the repository structure to
                  understand the codebase and then implement the necessary
                  changes to render UI before{" "}
                  <code className="bg-bg-quaternary px-1.5 py-0.5 rounded text-[11px] text-text-secondary">
                    vehicle_state
                  </code>{" "}
                  sync
                </p>

                <p>
                  <span className="text-text-quaternary">Bash:</span> Check
                  current directory and list repository contents
                </p>
                <p>
                  <span className="text-text-quaternary">View</span>{" "}
                  /home/runner/kinetic/kinetic-ios
                </p>

                <p className="text-text-quaternary">Worked for 2min</p>

                <p className="text-text-primary font-medium">
                  Copilot has completed the issue!
                </p>
                <p>See the pull request at:</p>
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="px-3 pb-3">
              <div className="flex items-center gap-2 bg-[#141415] border border-border-primary rounded-md px-3 py-2.5">
                <span className="flex-1 text-text-quaternary text-[13px]">
                  Message GitHub Copilot...
                </span>
                <Paperclip className="size-4 text-text-quaternary" />
                <SendHorizonal className="size-4 text-text-quaternary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
