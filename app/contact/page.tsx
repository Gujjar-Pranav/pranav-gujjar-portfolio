import Shell from "../components/site/Shell";

const contactLinks = [
  {
    number: "01",
    title: "Email",
    description: "mr.pranavgujjar@gmail.com",
    href: "mailto:mr.pranavgujjar@gmail.com",
    action: "Email",
  },
  {
    number: "02",
    title: "Phone",
    description: "+91 9008913366",
    href: "tel:+919008913366",
    action: "Call",
  },
  {
    number: "03",
    title: "LinkedIn",
    description: "Professional connections & opportunities",
    href: "https://www.linkedin.com/in/pranav-b-gujjar",
    action: "Connect",
  },
  {
    number: "04",
    title: "GitHub",
    description: "Explore my code and engineering work",
    href: "https://github.com/Gujjar-Pranav",
    action: "Explore",
  },
  {
    number: "05",
    title: "Curriculum Vitae",
    description: "Experience, education & technical background",
    href: "/Pranav_Gujjar_CV.pdf",
    action: "Download",
  },
];

export default function Contact() {
  return (
    <Shell>
      <main className="site-container py-8 sm:py-10 lg:py-12">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-[#e7ebf1] pb-4">
          <p className="eyebrow">CONTACT / LET&apos;S CONNECT</p>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[#657286]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <h1 className="max-w-2xl text-[clamp(2.7rem,4.5vw,4.5rem)] leading-[1.06] font-semibold tracking-[-0.065em] text-[#172238]">
              Let&apos;s build
              <br />
              something <span className="text-[#315db6]">meaningful.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#657286]">
              I work at the intersection of artificial intelligence, machine
              learning, and practical software engineering. I&apos;m interested
              in ambitious ideas that turn complex problems into useful,
              real-world solutions.
            </p>

            <div className="mt-6 border-l-2 border-[#315db6] pl-5">
              <p className="text-sm font-semibold text-[#172238]">
                Have a project or opportunity in mind?
              </p>
              <p className="mt-2 max-w-md text-sm leading-7 text-[#657286]">
                Whether it&apos;s an AI engineering role, an applied ML
                collaboration, or a technical challenge, I&apos;d be glad to
                connect.
              </p>
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold tracking-tight text-[#172238]">
                Find me here
              </h2>
              <span className="text-xs tracking-[0.15em] text-[#8b96a7]">
                05 CHANNELS
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
              {contactLinks.map((link, index) => (
                <a
                  key={link.number}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[#f7f9fd] ${
                    index !== 0 ? "border-t border-[#e7ebf1]" : ""
                  }`}
                >
                  <span className="self-start pt-1 text-xs font-semibold tracking-widest text-[#8b96a7]">
                    {link.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-[#172238] transition-colors group-hover:text-[#315db6]">
                      {link.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#657286]">
                      {link.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-[#315db6]">
                    {link.action} ↗
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-3 text-sm leading-6 text-[#8b96a7]">
              Explore my work and background, or connect directly through
              LinkedIn.
            </p>
          </div>
        </div>
      </main>
    </Shell>
  );
}
