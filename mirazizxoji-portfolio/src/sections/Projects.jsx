import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="page-width">
        <div className="projects-heading-row">
          <SectionHeading
            eyebrow="SELECTED CONCEPTS"
            title={<>Ideas taking<br /><span>shape on screen.</span></>}
            description="A few fictional interface concepts made to explore frontend layouts and interactions."
          />
          <span className="project-count">03 <i>CONCEPTS</i></span>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
        <p className="projects-note">These are demo concepts, not claims of completed client or production work.</p>
      </div>
    </section>
  )
}

export default Projects
