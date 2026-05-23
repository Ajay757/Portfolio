import BentoCard from "./BentoCard"

function WorkCard({ className = "" }) {
  return (
    <BentoCard className={className}>
      <h3 className="mb-6 text-2xl font-bold">
        How I Work
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-blue-400">
            Understand
          </h4>

          <p className="text-white/70">
            Research problems and understand user needs.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-400">
            Design
          </h4>

          <p className="text-white/70">
            Plan structure, layouts, and interactions before building.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-400">
            Build
          </h4>

          <p className="text-white/70">
            Develop maintainable solutions with clean, scalable code.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-blue-400">
            Improve
          </h4>

          <p className="text-white/70">
            Iterate and refine through testing and feedback.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4">
        <p className="text-xs text-white/40">
          Currently learning UI/UX principles through SEG3125, including
          usability, hierarchy, contrast, and user-centered design.
        </p>
      </div>
    </BentoCard>
  )
}

export default WorkCard