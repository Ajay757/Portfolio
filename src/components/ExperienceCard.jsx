import BentoCard from "./BentoCard"

const experiences = [
  {
    role: "Machine Learning Research Co-op",
    company: "Natural Resources Canada (NRCan)",
    period: "Winter 2026",
    image: "/assets/nrcan.jpeg",
    logoClass: "max-h-16",
    description:
      "Researched Remote Sensing Foundation Models (RS-FMs), representation learning, and AI systems for Earth observation while contributing to a research review paper.",
  },
  {
    role: "Software Developer Intern",
    company: "Driftstack",
    period: "Summer 2024",
    image: "/assets/driftstack.webp",
    logoClass: "max-h-16",
    description:
      "Worked on frontend interfaces, APIs, and backend systems while contributing to software development workflows and product improvements.",
  },
  {
    role: "Game Developer",
    company: "WFX Game Studio",
    period: "2024 – Present",
    image: "/assets/wfx_game_studio_logo.jpeg",
    logoClass: "max-h-16",
    description:
      "Collaborated on 2D game development projects while exploring UI, gameplay systems, and software design.",
  },
]

function ExperienceCard() {
  return (
    <BentoCard className="lg:col-span-12">
      <div className="mb-8">
        <h3 className="text-3xl font-bold tracking-tight">
          Experience
        </h3>

        <p className="mt-3 text-white/60">
          Internships, research, and technical experiences that shaped my
          approach to software and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-7
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/20
              hover:shadow-lg
              hover:shadow-blue-500/10
            "
          >
            <div className="mb-6 flex h-[64px] items-center justify-center rounded-xl border border-white/10 bg-slate-400/[0.06]] p-3 backdrop-blur-md">
              <img
                src={exp.image}
                alt={`${exp.company} logo`}
                className={`${exp.logoClass} max-w-[220px] object-contain brightness-110`}
              />
            </div>

            <p className="text-sm font-medium text-blue-400">
              {exp.period}
            </p>

            <h4 className="mt-3 text-2xl font-bold leading-tight">
              {exp.role}
            </h4>

            <p className="mt-1 font-medium text-white/75">
              {exp.company}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

export default ExperienceCard