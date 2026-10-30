import Image from "next/image";
import Link from "next/link";
import Shell from "./components/site/Shell";

const impactMetrics = [
  {
    value: "5+",
    label: "AI/ML MVPs Built",
    detail: "End-to-end delivery",
  },
  {
    value: "80%+",
    label: "Manual Assessment",
    detail: "80%+ less manual effort",
  },
  {
    value: "40%",
    label: "Faster Decision Cycles",
    detail: "Customer intelligence",
  },
  {
    value: "97.34%",
    label: "ROC-AUC",
    detail: "Retinal segmentation",
  },
];

export default function Home() {
  return (
    <Shell>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute top-[5%] right-[-15%] -z-10 h-[500px] w-[500px] rounded-full bg-[#f1f5fc] blur-3xl" />

        <div className="site-container grid min-h-[calc(100svh-155px)] items-center gap-10 py-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-12 lg:py-10">
          <div>
            <p className="eyebrow mb-5">
              AI ENGINEER
              <span className="mx-2 text-[#c3cbd6]">/</span>
              COMPUTER VISION
              <span className="mx-2 text-[#c3cbd6]">/</span>
              ML & NLP
            </p>

            <h1 className="max-w-[760px] text-[clamp(3rem,5.2vw,5.5rem)] leading-[1.04] font-semibold tracking-[-.075em] text-[#172238]">
              Intelligence,
              <br />
              <span className="text-[#315db6]">engineered</span> for impact
              <span className="text-[#315db6]">.</span>
            </h1>

            <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-[#657286]">
              I engineer AI-powered products that automate workflows, improve
              decisions, and solve real business problems. Specializing in
              Computer Vision, Machine Learning, and NLP, I take solutions from
              data and model development through APIs, applications, and
              production deployment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="site-primary">
                Explore my work <span aria-hidden>↗</span>
              </Link>

              <Link href="/contact" className="site-outline">
                Let&apos;s connect <span aria-hidden>↗</span>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[#e5ebf2] pt-6 sm:grid-cols-4">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="min-w-0">
                  <p className="text-[clamp(1.35rem,2.1vw,2rem)] leading-none font-semibold tracking-[-.045em] text-[#172238]">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-[11px] leading-4 font-semibold text-[#263750]">
                    {metric.label}
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-[#8290a3]">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/projects/forcefield-ai-movement-intelligence-platform"
              className="group mt-5 block rounded-xl border border-[#dce5f2] bg-[#f8faff] px-4 py-3 transition-colors hover:border-[#a9bce1] hover:bg-[#f2f6fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315db6]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-semibold tracking-[.12em] text-[#315db6] uppercase">
                  Featured professional work · UK startup
                </span>
                <span
                  aria-hidden="true"
                  className="text-sm text-[#315db6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </div>

              <h2 className="mt-1 text-[15px] font-semibold tracking-[-.02em] text-[#172238]">
                ForceField — Real-Time AI Movement Intelligence
              </h2>

              <p className="mt-1 text-[12px] leading-[1.6] text-[#657286]">
                Turned a UK startup founder&apos;s vision and Figma designs into
                a working AI-powered MVP — owning frontend, backend, real-time
                Computer Vision, adaptive voice coaching, and cost-conscious
                deployment.
              </p>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-medium text-[#526784]">
                <span>60+ players testing the MVP</span>
                <span>Browser-based AI</span>
                <span>Cost-conscious infrastructure</span>
              </div>

              <span className="mt-2 inline-block text-[11px] font-semibold text-[#315db6]">
                Explore case study ↗
              </span>
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -inset-4 rounded-[30px] border border-[#e8edf5]" />

            <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#edf1f7]">
              <Image
                src="/images/pranav-gujjar-profile-final.jpg"
                alt="Pranav Gujjar"
                fill
                priority
                sizes="(max-width:1024px) 85vw, 360px"
                className="object-cover object-center"
              />
            </div>

            <div className="relative mt-4 flex justify-between gap-3 text-[11px] font-medium tracking-[.08em] text-[#738196]">
              <span>PRANAV GUJJAR</span>
              <span>AI / ML ENGINEER</span>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
