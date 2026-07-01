import BentoCard from "./BentoCard"

const caseStudies = [
  {
    num: "01",
    title: "Crown Cuts Barbershop",
    desc: "A premium modern barber shop website designed using user-centered design principles, featuring service exploration, barber profiles, appointment booking, and confirmation flows.",
    image: "/assets/crown-cuts.png",
    link: "https://crown-cuts.netlify.app/",
  },
  {
    num: "02",
    title: "Memory Game",
    desc: "A Retro Sequence Memory Game",
    image: "/assets/pulsepath.png",
    link: "https://pulsepath-game.netlify.app/",
  },
  {
    num: "03",
    title: "Novagear",
    desc: "A high-fidelity gaming accessories e-commerce prototype.",
    image: "/assets/novagear.png",
    link: "https://nova-gear.netlify.app/",
  },
  {
    num: "04",
    title: "Analytics Site",
    desc: "A future dashboard with data visualization.",
    image: "/assets/analytics-site.jpg",
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
            target={study.link.startsWith("http") ? "_blank" : undefined}
            rel={study.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="
              group
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              overflow-hidden
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/20
              hover:shadow-lg
              hover:shadow-blue-500/10
            "
          >
            {/* Image */}
            <div className="h-56 overflow-hidden border-b border-white/10">
              <img
                src={study.image}
                alt={study.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm font-bold text-blue-400">
                {study.num}
              </p>

              <h4 className="mt-2 text-xl font-bold">
                {study.title}
              </h4>

              <p className="mt-1 text-sm text-white/55">
                {study.desc}
              </p>

              <p className="mt-2 text-sm text-blue-400">
                View Project →
              </p>
            </div>
          </a>
        ))}
      </div>
    </BentoCard>
  )
}

export default CaseStudiesCard