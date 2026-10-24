function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <div className="project-preview" aria-hidden="true">
        <div className="preview-window">
          <div className="preview-toolbar"><span /><span /><span /><i /></div>
          {project.visual === 'crm' && (
            <div className="crm-preview">
              <div className="preview-sidebar"><b /><i /><i /><i /><i /></div>
              <div className="preview-content">
                <div className="preview-title" />
                <div className="preview-stats"><i /><i /><i /></div>
                <div className="preview-chart"><b /><b /><b /><b /><b /><b /><b /></div>
                <div className="preview-lines"><i /><i /><i /></div>
              </div>
            </div>
          )}
          {project.visual === 'market' && (
            <div className="market-preview">
              <div className="preview-market-head"><b /><i /></div>
              <div className="market-feature"><span /><i /><b /></div>
              <div className="market-items"><i /><i /><i /></div>
            </div>
          )}
          {project.visual === 'stay' && (
            <div className="stay-preview">
              <div className="stay-hero"><i /><b /><span /></div>
              <div className="stay-search"><i /><i /><i /><b /></div>
              <div className="stay-cards"><i /><i /><i /></div>
            </div>
          )}
        </div>
        <span className="preview-index">0{index + 1}</span>
      </div>
      <div className="project-copy">
        <div className="project-title-row">
          <div>
            <span className="demo-label">Demo Project</span>
            <h3>{project.title}</h3>
            <span className="project-type">{project.type}</span>
          </div>
          <span className="project-mark" aria-hidden="true"><span /></span>
        </div>
        <p>{project.description}</p>
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <span className="project-status">Preview and source link unavailable</span>
      </div>
    </article>
  )
}

export default ProjectCard
