import BentoCard from "./BentoCard"

function TechStackCard() {
  return (
    <BentoCard className="lg:col-span-3">
      <h3 className="mb-7 text-2xl font-bold">
        Tech Stack
      </h3>

      <div className="space-y-5 text-base text-white/75">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Core Languages
          </p>

          <p className="mt-1">
            Java • Python • JavaScript
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            AI & Data
          </p>

          <p className="mt-1">
            TensorFlow • Pandas • NumPy
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Full-Stack
          </p>

          <p className="mt-1">
            React • FastAPI • PostgreSQL
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Tools
          </p>

          <p className="mt-1">
            Git • Docker • Firebase
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
            Platforms
          </p>

          <p className="mt-1">
            Android Studio • VS Code
          </p>
        </div>
      </div>
    </BentoCard>
  )
}

export default TechStackCard