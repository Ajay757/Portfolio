import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navigation, Footer } from '../App'
import { projects } from '../data/portfolioData'
export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); document.title = project ? `${project.title} | Ajay Suthaharan` : 'Project not found | Ajay Suthaharan'; return () => { document.title = 'Ajay Suthaharan | AI & Software Engineering' } }, [project])
  return <div className="site-shell"><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main" className="project-detail"><a className="text-link" href="/#projects">← All projects</a>{project ? <><div className="detail-heading"><p className="eyebrow">{project.category} · {project.status}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><ul className="tags">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul></div><img className="detail-image" src={project.image} alt={`${project.title} project visual`} /><section className="contribution"><p className="eyebrow">{project.contribution ? "MY CONTRIBUTION" : "PROJECT OVERVIEW"}</p><h2>{project.contribution ? "What I worked on." : "What it does."}</h2><p>{project.contribution || project.overview}</p></section><div className="detail-grid">{project.details.map(([title, description]) => <section key={title}><h2>{title}</h2><p>{description}</p></section>)}</div><div className="detail-footer"><a className="button primary" href="mailto:asuth075@uottawa.ca">Ask me about this project ↗</a><a className="text-link" href="https://github.com/Ajay757" target="_blank" rel="noreferrer">My GitHub profile ↗</a></div></> : <><h1>Project not found.</h1><p>Explore the selected work on the homepage.</p></>}</main><Footer /></div>
}
