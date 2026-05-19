import BentoCard from "./BentoCard"

function HeroCard() {
  return (
    <BentoCard className="lg:col-span-6 min-h-[360px] flex flex-col justify-center">
      <p className="mb-6 text-sm font-semibold tracking-widest text-blue-400">
        CS STUDENT • BUILDER • PROBLEM SOLVER
      </p>

      <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
        Building AI, software systems, and meaningful{" "}
        <span className="text-blue-500">user experiences.</span>
      </h2>

      <p className="mt-6 max-w-lg text-lg text-white/65">
        I’m a Computer Science student at the University of Ottawa interested in
        AI, software engineering, UI/UX design, and building practical tools that
        solve real problems.
      </p>
    </BentoCard>
  )
}

export default HeroCard