import BentoCard from "./BentoCard"

function WorkCard() {
  return (
    <BentoCard>
      <h3 className="mb-5 text-2xl font-bold">How I Work</h3>

      <div className="space-y-5">
        <div>
          <h4 className="font-semibold text-blue-400">Understand</h4>
          <p className="text-white/70">
            Research the problem and understand user needs.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-400">Design</h4>
          <p className="text-white/70">
            Plan layouts, structure, and interactions before building.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-400">Build</h4>
          <p className="text-white/70">
            Develop scalable and maintainable solutions with clean code.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-400">Improve</h4>
          <p className="text-white/70">
            Test, iterate, and refine through feedback.
          </p>
        </div>
      </div>
    </BentoCard>
  )
}

export default WorkCard