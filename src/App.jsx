import Navbar from "./components/Navbar"
import HeroCard from "./components/HeroCard"
import ProfileCard from "./components/ProfileCard"
import TechStackCard from "./components/TechStackCard"
import AboutCard from "./components/AboutCard"
import WorkCard from "./components/WorkCard"
import CaseStudiesCard from "./components/CaseStudiesCard"
import ExperienceCard from "./components/ExperienceCard"
import ProjectsCard from "./components/ProjectsCard"
import ContactCard from "./components/ContactCard"

function App() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-6 text-white">
      <div className="mx-auto max-w-7xl space-y-5">
        <Navbar/>

        <section id="home" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <HeroCard/>
          <ProfileCard/>
          <TechStackCard/>
        </section>

        <section id="about" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <AboutCard className="lg:col-span-7" />
          <WorkCard className="lg:col-span-5" />
        </section>

        <section id="portfolio" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <CaseStudiesCard/>
        </section>

        <section id="experience" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <ExperienceCard/>
        </section>

        <section id="featured-projects" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <ProjectsCard/>
        </section>

        <section id="contact" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <ContactCard/>
        </section>

      </div>
    </main>
  )
}

export default App