import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link="https://journey-craft-front-end.vercel.app/"
          h3="Journey Craft"
          techStack="MERN + Vite"
          p="A customized trip management web app that lets users plan and personalize itineraries, integrate local events, and manage their travel."
        />
        <ProjectCard
          link="https://mern-project-six-red.vercel.app/"
          h3="Write It"
          techStack="MERN + Vite"
          p="A full-stack story writing platform where users can write, manage, and share stories securely with JWT authentication."
        />
      </div>
    </section>
  );
}

export default Projects;
