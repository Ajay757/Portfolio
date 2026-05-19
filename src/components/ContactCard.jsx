import BentoCard from "./BentoCard"

function ContactCard() {
  return (
    <BentoCard className="lg:col-span-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        {/* Left Side */}
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-400/80">
            Contact
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight">
            Let’s build something.
          </h3>

          <p className="mt-4 max-w-xl text-white/60">
            I’m open to internships, software projects, collaborations, and
            conversations around AI, UI/UX, and full-stack development.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:asuth075@uottawa.ca"
            className="
              rounded-2xl border border-white/10 bg-white/[0.03]
              p-5 transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-500/20
              hover:bg-blue-500/[0.06]
            "
          >
            <p className="text-sm text-white/50">Email</p>
            <p className="mt-2 font-semibold text-white">
              Send Message
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ajay757"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-2xl border border-white/10 bg-white/[0.03]
              p-5 transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-500/20
              hover:bg-blue-500/[0.06]
            "
          >
            <p className="text-sm text-white/50">GitHub</p>
            <p className="mt-2 font-semibold text-white">
              View Code
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ajaysuthaharan"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-2xl border border-white/10 bg-white/[0.03]
              p-5 transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-500/20
              hover:bg-blue-500/[0.06]
            "
          >
            <p className="text-sm text-white/50">LinkedIn</p>
            <p className="mt-2 font-semibold text-white">
              Connect
            </p>
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="
              rounded-2xl border border-blue-500/20
              bg-blue-500/[0.08]
              p-5 transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:bg-blue-500/[0.14]
            "
          >
            <p className="text-sm text-blue-300">
              Resume
            </p>

            <p className="mt-2 font-semibold text-white">
              Download CV
            </p>
          </a>
        </div>
      </div>
    </BentoCard>
  )
}

export default ContactCard