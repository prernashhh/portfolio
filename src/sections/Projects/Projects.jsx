import styles from './ProjectsStyles.module.css';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* No ProjectCard components here, just empty space */}
      </div>
    </section>
  );
}

export default Projects;
