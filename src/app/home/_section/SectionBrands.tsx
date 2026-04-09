import Link from "next/link";

const brands = [
  "Coinbase",
  "OpenAI",
  "Cursor",
  "Ramp",
  "Vercel",
  "Scale",
  "Opendoor",
  "Cash App",
];

export default function SectionBrands() {
  return (
    <section className="w-full overflow-hidden">
      {/* Brand Logos */}
      <div className="h-[110px] overflow-hidden relative w-full">
        <div className="flex w-[calc(200px*8)] animate-scroll lg:animate-none">
          {brands.map((brand) => (
            <div
              key={brand}
              className="h-[110px] w-[200px] flex items-center justify-center"
            >
              <Link
                href="/"
                className="group flex flex-col items-center gap-8 sm:gap-10"
              >
                <span
                  key={brand}
                  className="text-[13px] sm:text-[15px] font-medium tracking-wide text-text-primary uppercase"
                >
                  {brand}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* A new species of product tool */}

      <h2 className="font-medium px-8 text-[40px] leading-[44px] tracking-tighter pb-16">
        <span className="">A new species of product tool.</span>{" "}
        <span className="text-text-tertiary">
          Purpose-built for modern teams with AI workflows at its core, Linear
          sets a new standard for planning and building products.
        </span>
      </h2>

      {/* 3 Column Cards */}
      <div className="grid grid-cols-3 min-w-[1000px]">
        {/* Card 1 - Built for purpose */}
        <div className="group relative overflow-hidden flex flex-col items-center border-r">
          <p className="text-text-quaternary/50 mr-auto px-6 text-[13px]">
            FIG 0.2
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="265"
            height="262"
            fill="none"
            viewBox="0 0 265 262"
          >
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 186.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 168.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 150.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 132.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 114.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#D0D6E0"
              stroke-width="0.5"
              d="M250.355 107.636a3.43 3.43 0 0 1 1.895 3.067v88.333a3.43 3.43 0 0 1-1.895 3.067l-111.972 55.985a13.71 13.71 0 0 1-12.266 0L14.145 202.103a3.43 3.43 0 0 1-1.895-3.067v-88.333c0-1.299.734-2.486 1.895-3.067l115.038-57.52a6.86 6.86 0 0 1 6.134 0z"
            ></path>
            <g filter="url(#filter0_d_3072_54146)">
              <path
                fill="#08090A"
                d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"
              ></path>
              <path
                stroke="#D0D6E0"
                stroke-width="0.5"
                d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"
              ></path>
            </g>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 71.726 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-width="0.5"
              d="M103.378 91.627c-.908-.281-.495-.95.573-.95h56.598c1.068 0 1.48.669.573.95-17.631 5.466-40.113 5.466-57.744 0ZM91.088 86.43c.205.117.502.183.813.183h80.697c.311 0 .608-.066.814-.182a42 42 0 0 0 4.679-3.057c.47-.357-.052-.824-.907-.824H87.316c-.856 0-1.378.467-.907.824a42 42 0 0 0 4.679 3.057ZM81.032 78.14c.16.21.564.346 1.013.346h100.409c.449 0 .853-.136 1.014-.346q1.152-1.502 1.939-3.05c.173-.34-.349-.667-1.052-.667H80.145c-.704 0-1.226.327-1.052.668a19.7 19.7 0 0 0 1.938 3.05ZM78.564 70.36c-.574 0-1.052-.222-1.084-.508-.849-7.528 4.478-15.198 15.98-20.95 21.423-10.71 56.157-10.71 77.58 0 11.502 5.752 16.828 13.422 15.979 20.95-.032.286-.51.507-1.084.507z"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-dasharray="1 3"
              stroke-linecap="round"
              d="M12.679 84.584v20.142M132.25 144.583v20.143M251.821 84.584v20.142"
            ></path>
            <defs>
              <filter
                id="filter0_d_3072_54146"
                width="264.5"
                height="156.191"
                x="0"
                y="0"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0.0313726 0 0 0 0 0.0352941 0 0 0 0 0.0392157 0 0 0 0.6 0"></feColorMatrix>
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3072_54146"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3072_54146"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <div className="p-5 sm:p-6 mt-10">
            <h3 className="text-[15px] sm:text-base font-medium text-text-primary">
              Built for purpose
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-text-tertiary">
              Linear is shaped by the practices and principles of world-class
              product teams.
            </p>
          </div>
        </div>

        {/* Card 2 - Powered by AI agents */}
        <div className="group relative overflow-hidden flex flex-col items-center border-r">
          <p className="text-text-quaternary/50 mr-auto px-6 text-[13px]">
            FIG 0.3
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="265"
            height="262"
            fill="none"
            viewBox="0 0 265 262"
          >
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 186.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 168.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 150.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 132.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 114.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#D0D6E0"
              stroke-width="0.5"
              d="M250.355 107.636a3.43 3.43 0 0 1 1.895 3.067v88.333a3.43 3.43 0 0 1-1.895 3.067l-111.972 55.985a13.71 13.71 0 0 1-12.266 0L14.145 202.103a3.43 3.43 0 0 1-1.895-3.067v-88.333c0-1.299.734-2.486 1.895-3.067l115.038-57.52a6.86 6.86 0 0 1 6.134 0z"
            ></path>
            <g filter="url(#filter0_d_3072_54146)">
              <path
                fill="#08090A"
                d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"
              ></path>
              <path
                stroke="#D0D6E0"
                stroke-width="0.5"
                d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"
              ></path>
            </g>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 71.726 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-width="0.5"
              d="M103.378 91.627c-.908-.281-.495-.95.573-.95h56.598c1.068 0 1.48.669.573.95-17.631 5.466-40.113 5.466-57.744 0ZM91.088 86.43c.205.117.502.183.813.183h80.697c.311 0 .608-.066.814-.182a42 42 0 0 0 4.679-3.057c.47-.357-.052-.824-.907-.824H87.316c-.856 0-1.378.467-.907.824a42 42 0 0 0 4.679 3.057ZM81.032 78.14c.16.21.564.346 1.013.346h100.409c.449 0 .853-.136 1.014-.346q1.152-1.502 1.939-3.05c.173-.34-.349-.667-1.052-.667H80.145c-.704 0-1.226.327-1.052.668a19.7 19.7 0 0 0 1.938 3.05ZM78.564 70.36c-.574 0-1.052-.222-1.084-.508-.849-7.528 4.478-15.198 15.98-20.95 21.423-10.71 56.157-10.71 77.58 0 11.502 5.752 16.828 13.422 15.979 20.95-.032.286-.51.507-1.084.507z"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-dasharray="1 3"
              stroke-linecap="round"
              d="M12.679 84.584v20.142M132.25 144.583v20.143M251.821 84.584v20.142"
            ></path>
            <defs>
              <filter
                id="filter0_d_3072_54146"
                width="264.5"
                height="156.191"
                x="0"
                y="0"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0.0313726 0 0 0 0 0.0352941 0 0 0 0 0.0392157 0 0 0 0.6 0"></feColorMatrix>
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3072_54146"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3072_54146"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <div className="p-5 sm:p-6 mt-10">
            <h3 className="text-[15px] sm:text-base font-medium text-text-primary">
              Powered by AI agents
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-text-tertiary">
              Designed for workflows shared by humans and agents. From drafting
              PRDs to pushing PRs.
            </p>
          </div>
        </div>

        {/* Card 3 - Designed for speed */}
        <div className="group relative overflow-hidden flex flex-col items-center">
          <p className="text-text-quaternary/50 mr-auto px-6 text-[13px]">
            FIG 0.4
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="265"
            height="262"
            fill="none"
            viewBox="0 0 265 262"
          >
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 186.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 168.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 150.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 132.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 114.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#D0D6E0"
              stroke-width="0.5"
              d="M250.355 107.636a3.43 3.43 0 0 1 1.895 3.067v88.333a3.43 3.43 0 0 1-1.895 3.067l-111.972 55.985a13.71 13.71 0 0 1-12.266 0L14.145 202.103a3.43 3.43 0 0 1-1.895-3.067v-88.333c0-1.299.734-2.486 1.895-3.067l115.038-57.52a6.86 6.86 0 0 1 6.134 0z"
            ></path>
            <g filter="url(#filter0_d_3072_54146)">
              <path
                fill="#08090A"
                d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"
              ></path>
              <path
                stroke="#D0D6E0"
                stroke-width="0.5"
                d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"
              ></path>
            </g>
            <path
              stroke="#3E3E44"
              stroke-linecap="round"
              stroke-width="0.5"
              d="m19.107 71.726 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-width="0.5"
              d="M103.378 91.627c-.908-.281-.495-.95.573-.95h56.598c1.068 0 1.48.669.573.95-17.631 5.466-40.113 5.466-57.744 0ZM91.088 86.43c.205.117.502.183.813.183h80.697c.311 0 .608-.066.814-.182a42 42 0 0 0 4.679-3.057c.47-.357-.052-.824-.907-.824H87.316c-.856 0-1.378.467-.907.824a42 42 0 0 0 4.679 3.057ZM81.032 78.14c.16.21.564.346 1.013.346h100.409c.449 0 .853-.136 1.014-.346q1.152-1.502 1.939-3.05c.173-.34-.349-.667-1.052-.667H80.145c-.704 0-1.226.327-1.052.668a19.7 19.7 0 0 0 1.938 3.05ZM78.564 70.36c-.574 0-1.052-.222-1.084-.508-.849-7.528 4.478-15.198 15.98-20.95 21.423-10.71 56.157-10.71 77.58 0 11.502 5.752 16.828 13.422 15.979 20.95-.032.286-.51.507-1.084.507z"
            ></path>
            <path
              stroke="#3E3E44"
              stroke-dasharray="1 3"
              stroke-linecap="round"
              d="M12.679 84.584v20.142M132.25 144.583v20.143M251.821 84.584v20.142"
            ></path>
            <defs>
              <filter
                id="filter0_d_3072_54146"
                width="264.5"
                height="156.191"
                x="0"
                y="0"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="6"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0.0313726 0 0 0 0 0.0352941 0 0 0 0 0.0392157 0 0 0 0.6 0"></feColorMatrix>
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3072_54146"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3072_54146"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
          </svg>
          <div className="p-5 sm:p-6 mt-10">
            <h3 className="text-[15px] sm:text-base font-medium text-text-primary">
              Designed for speed
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-text-tertiary">
              Reduces noise and restores momentum to help teams ship with high
              velocity and focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
