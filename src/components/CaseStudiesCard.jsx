import BentoCard from "./BentoCard"

const caseStudies = [
  ["01", "Service Site", "A future website for a service-based business."],
  ["02", "Memory Game", "A future interactive memory game interface."],
  ["03", "E-Commerce Site", "A future shopping experience design."],
  ["04", "Analytics Site", "A future dashboard with data visualization."],
]

function CaseStudiesCard() {
  return (
    <BentoCard className="lg:col-span-12">
      <h3 className="text-2xl font-bold">Design Portfolio</h3>
       <p className="mt-1 italic text-sm text-blue-400/80">
            SEG3125 Projects
        </p>
      <p className="mt-2 mb-6 text-white/60">
        UI/UX case studies and interface explorations.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {caseStudies.map(([num, title, desc]) => (
          <a
            key={title}
            href="#"
            className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-6
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-500/20
                hover:shadow-lg
                hover:shadow-blue-500/10"
          >
            <p className="text-sm font-bold text-blue-400">{num}</p>
            <h4 className="mt-2 text-xl font-bold">{title}</h4>
            <p className="mt-1 text-sm text-white/55">{desc}</p>
            <p className="mt-2 text-sm text-white/40">Coming Soon</p>
          </a>
        ))}
      </div>
    </BentoCard>
  )
}

export default CaseStudiesCard