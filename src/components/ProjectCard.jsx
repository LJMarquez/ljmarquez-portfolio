import { useState } from "react"
import { motion } from "framer-motion"
import "../styles/ProjectCard.css"

const ProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const openModal = () => {
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <motion.div
        className="project-card position-relative"
        onClick={openModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10 }}
      >
        {project.awards && (
          <div className="badge-container">
            {project.awards.map((award, index) => (
              <div
                key={index}
                className="project-badge"
                style={{
                  backgroundColor:
                    award === "gold"
                      ? "var(--warning)"
                      : award === "silver"
                        ? "var(--text-muted)"
                        : "var(--accent-tertiary)",
                }}
              >
                {award === "gold" ? "Gold" : award === "silver" ? "Silver" : "Bronze"}
              </div>
            ))}
          </div>
        )}

        <div className="project-image">
          <img
            src={
              project.type === "coding"
                ? `/assets/project-covers/${project.coverImg}`
                : `/assets/graphic-design-projects/${project.id}/${project.coverImg}`
            }
            alt={`${project.title} project`}
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />
          <div className="project-overlay">
            <div className="project-overlay-content">
              <span>View Details</span>
            </div>
          </div>
        </div>

        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-header">{project.header}</p>
          <p className="project-description">{project.description.replace(/<[^>]*>/g, "")}</p>
          <div className="project-links">
            <a
              className="project-link"
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
            </a>
            {project.repoLink && (
              <a
                className="project-link"
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {modalOpen && (
        <div className="modal active" onClick={closeModal}>
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: project.description }} />
            <div className="modal-footer">
              <a className="modal-button" href={project.projectLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
