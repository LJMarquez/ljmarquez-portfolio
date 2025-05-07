import ProjectCard from "../components/ProjectCard"
import { projectData } from "../data/projectData"
import { Link } from "react-router-dom"

const CodeProjects = () => {
  const codingProjects = projectData.filter((project) => project.type === "coding")

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Coding Projects</h1>
          <p className="text-center mb-5">
            Here are all of the coding projects I've made over the course of my time at West-MEC! Most of these projects
            aren't fully polished but are here to display my knowledge and skills in web development. With sufficient
            time and client input I'm able to produce more polished products like the ones you see{" "}
            <Link to="/award-projects">here!</Link>
          </p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="projects-grid">
            {codingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CodeProjects
