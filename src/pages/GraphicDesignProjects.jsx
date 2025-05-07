import ProjectCard from "../components/ProjectCard"
import { projectData } from "../data/projectData"

const GraphicDesignProjects = () => {
  const designProjects = projectData.filter((project) => project.type === "graphic design")

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Graphic Design Projects</h1>
          <p className="text-center mb-5">
            Here are all of the graphic design projects I've made over the course of my time at Verrado High School!
            These projects range from logos, to flyers, to brochures, to 3D renders. Some of them were made for
            SkillsUSA competitions and one was made for a real company that they use today!
          </p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="projects-grid">
            {designProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GraphicDesignProjects
