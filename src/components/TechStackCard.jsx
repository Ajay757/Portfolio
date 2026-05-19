import BentoCard from "./BentoCard"

function TechStackCard() {
  return (
    <BentoCard className="lg:col-span-3">
      <h3 className="mb-6 text-2xl font-bold">Tech Stack</h3>

      <div className="space-y-5 text-white/70">
        <div>
          <p className="font-semibold text-blue-400">Languages</p>
          <p>Java • Python • JavaScript • SQL</p>
        </div>

        <div>
          <p className="font-semibold text-blue-400">Frontend</p>
          <p>React • HTML • CSS • Tailwind</p>
        </div>

        <div>
          <p className="font-semibold text-blue-400">Tools</p>
          <p>Git • Firebase • PostgreSQL • Docker</p>
        </div>

        <div>
          <p className="font-semibold text-blue-400">Interests</p>
          <p>AI/ML • UI/UX • Data Science • Game Dev</p>
        </div>
      </div>
    </BentoCard>
  )
}

export default TechStackCard