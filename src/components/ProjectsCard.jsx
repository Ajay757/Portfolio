import BentoCard from "./BentoCard"

const projects = [
  {
    title: "HiPREX",
    subtitle: "Hybrid AI Routing System",
    description:
      "Experimental AI system combining LLM reasoning, recursive routing, and memory-efficient state management using FastAPI, PostgreSQL, pgvector, and Docker.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "AI"],
    image: "/assets/hiprex.png",
  },
  {
    title: "Skysense",
    subtitle: "Flight Analytics Dashboard",
    description:
      "Hackathon project for detecting airspace conflicts, identifying hotspots, and visualizing flight paths using React, Leaflet, analytics, and route intelligence.",
    tech: ["React", "Vite", "Leaflet", "Analytics"],
    image: "/assets/skysense.png",
  },
  {
    title: "Melanoma AI",
    subtitle: "Skin Cancer Detection Concept",
    description:
      "AI-powered concept for detecting melanoma risk through image-based mole analysis and classification workflows.",
    tech: ["AI", "TensorFlow", "Healthcare"],
    image: "/assets/melanoma.png",
  },
  {
    title: "Rentify",
    subtitle: "Mobile Rental Platform",
    description:
      "Android-based rental marketplace with Firebase integration, account management, listings, and real-time synchronization.",
    tech: ["Java", "Firebase", "Android"],
    image: "/assets/rentify.png",
  },
  {
    title: "e-Hotels",
    subtitle: "Hotel Booking System",
    description:
      "Database-driven hotel booking platform using PostgreSQL with booking workflows, admin management, and filtering systems.",
    tech: ["Java", "PostgreSQL", "SQL"],
    image: "/assets/ehotel.png",
  },

  {
    title: "Impulse Stopper",
    subtitle: "Chrome Extension",
    description:
        "Browser extension designed to reduce impulse spending by detecting shopping carts, tracking monthly spending habits, and nudging users toward mindful purchasing decisions.",
    tech: ["JavaScript", "Chrome API", "HTML/CSS", "JSON"],
    image: "/assets/impulse.png",
    },
]

function ProjectsCard() {
  return (
    <BentoCard className="lg:col-span-12">
      <div className="mb-8">
        <h3 className="text-3xl font-bold tracking-tight">
          Featured Projects
        </h3>

        <p className="mt-3 text-white/60">
          Projects spanning AI, software systems, mobile development, analytics,
          and full-stack engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-500/20
              hover:shadow-lg
              hover:shadow-blue-500/10
            "
          >
            <div
              className="
                h-44
                overflow-hidden
                border-b
                border-white/10
                bg-gradient-to-b
                from-white/[0.04]
                to-white/[0.01]
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.04]
                "
              />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-wider text-blue-400/80">
                {project.subtitle}
              </p>

              <h4 className="mt-2 text-2xl font-bold">
                {project.title}
              </h4>

              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border border-blue-500/10
                      bg-blue-500/[0.06]
                      px-3
                      py-1
                      text-xs
                      text-blue-200/80
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

export default ProjectsCard