import BentoCard from "./BentoCard"

function AboutCard() {
  return (
    <BentoCard>
      <h3 className="mb-5 text-2xl font-bold">About Me</h3>

      <p className="leading-relaxed text-white/70">
        I’m a Computer Science student at the University of Ottawa with a strong
        interest in AI, software development, and UI/UX design. I enjoy building
        projects that combine technical problem-solving with clean, thoughtful
        interfaces.
      </p>

      <p className="mt-5 leading-relaxed text-white/70">
        Outside academics, I enjoy building projects, hackathons, software
        experimentation, and continuously learning new technologies.
      </p>
    </BentoCard>
  )
}

export default AboutCard