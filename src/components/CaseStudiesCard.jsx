import BentoCard from "./BentoCard"

const caseStudies = [
  {
    num: "01",
    title: "Service Site",
    desc: "A future website for a service-based business.",
    link: "/coming-soon?project=Service+Site",
  },
  {
    num: "02",
    title: "Memory Game",
    desc: "A future interactive memory game interface.",
    link: "/coming-soon?project=Memory+Game",
  },
  {
    num: "03",
    title: "E-Commerce Site",
    desc: "A future shopping experience design.",
    link: "/coming-soon?project=E-Commerce+Site",
  },
  {
    num: "04",
    title: "Analytics Site",
    desc: "A future dashboard with data visualization.",
    link: "/coming-soon?project=Analytics+Site",
  },
]

function CaseStudiesCard() {
  return (
    <BentoCard className="lg:col-span-12">
      <h3 className="text-2xl font-bold">
        Design Portfolio
      </h3>

      <p className="mt-1 text-sm italic text-blue-400/80">
        SEG3125 Projects
      </p>

      <p className="mt-2 mb-6 text-white/60">
        UI/UX case studies and interface explorations.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {caseStudies.map((study) => (
          <a
            key={study.title}
            href={study.link}
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/20
              hover:shadow-lg
              hover:shadow-blue-500/10
            "
          >
            <p className="text-sm font-bold text-blue-400">
              {study.num}
            </p>

            <h4 className="mt-2 text-xl font-bold">
              {study.title}
            </h4>

            <p className="mt-1 text-sm text-white/55">
              {study.desc}
            </p>

            <p className="mt-2 text-sm text-white/40">
              Coming Soon
            </p>
          </a>
        ))}
      </div>
    </BentoCard>
  )
}

export default CaseStudiesCard