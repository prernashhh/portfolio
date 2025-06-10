import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>
      
      <div className={styles.skillCategory}>
        <h2 className={styles.categoryTitle}>Programming Languages</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="Python" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h2 className={styles.categoryTitle}>Frontend Development</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="jQuery" />
          <SkillList src={checkMarkIcon} skill="Responsive Design" />
          <SkillList src={checkMarkIcon} skill="Figma to Code" />
          <SkillList src={checkMarkIcon} skill="Cross-browser Compatibility" />
          <SkillList src={checkMarkIcon} skill="Mobile Responsiveness" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h2 className={styles.categoryTitle}>Backend Development</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Node.js" />
          <SkillList src={checkMarkIcon} skill="Express.js" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h2 className={styles.categoryTitle}>Databases</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="MongoDB" />
          <SkillList src={checkMarkIcon} skill="SQLite" />
        </div>
      </div>

      <div className={styles.skillCategory}>
        <h2 className={styles.categoryTitle}>Libraries & Tools</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Pandas" />
          <SkillList src={checkMarkIcon} skill="NumPy" />
          <SkillList src={checkMarkIcon} skill="Matplotlib" />
          <SkillList src={checkMarkIcon} skill="Git & GitHub" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
