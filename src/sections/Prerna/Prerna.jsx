import styles from './PrernaStyles.module.css';
import heroImg from '../../assets/profile-pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Prerna Sharma"
          />
          <div className={styles.colorModeToggle} onClick={toggleTheme}>
            <img
              className={styles.colorMode}
              src={themeIcon}
              alt="Color mode icon"
            />
          </div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>
            Prerna
            <br />
            Sharma
          </h1>
          <div className={styles.socialIconsContainer}>
            <a href="https://github.com/prernashhh" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/prerna-sharma-2706a224a" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn icon" />
            </a>
          </div>
          <p className={styles.description}>
            I'm a passionate B.Tech CSE student at JK Lakshmipat University with hands-on experience in full stack development using MERN + Vite. I love building responsive and user-friendly web applications — from concept to deployment.
          </p>
          <a href={CV} download className={styles.resumeLink}>
            <button className={styles.resumeBtn}>Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;