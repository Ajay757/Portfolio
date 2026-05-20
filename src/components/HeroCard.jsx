import BentoCard from "./BentoCard"

function HeroCard() {
  return (
    <BentoCard className="lg:col-span-6 min-h-[360px] flex flex-col justify-center">
      <p className="mb-6 text-sm font-semibold tracking-widest text-blue-400">
        AI • FULL-STACK • SOFTWARE ENGINEERING
      </p>

      <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
        Building AI, software systems, and meaningful{" "}
        <span className="text-blue-500">user experiences.</span>
      </h2>

      <p className="mt-6 max-w-lg text-lg text-white/65">
        Passionate about building intelligent systems, clean interfaces, and software
        that people actually enjoy using.
      </p>
    </BentoCard>
  )
}

export default HeroCard