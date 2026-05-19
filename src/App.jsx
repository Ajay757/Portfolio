import Navbar from "./components/Navbar"
import HeroCard from "./components/HeroCard"
import ProfileCard from "./components/ProfileCard"
import TechStackCard from "./components/TechStackCard"
import AboutCard from "./components/AboutCard"
import WorkCard from "./components/WorkCard"
import CaseStudiesCard from "./components/CaseStudiesCard"

function App() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-6 text-white">
      <div className="mx-auto max-w-7xl space-y-5">
        <Navbar />

        <section id="home" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <HeroCard />
          <ProfileCard />
          <TechStackCard />
        </section>

        <section id="about" className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <AboutCard />
          <WorkCard />
        </section>

        <section id="projects" className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <CaseStudiesCard />
        </section>

      </div>
    </main>
  )
}

export default App