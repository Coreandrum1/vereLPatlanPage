import styles from "./SkillList.style.module.css";
import photoshopIcon from "../icons/🦆 icon _adobe photoshop_.svg";
import dreamWeaver from "../icons/🦆 icon _adobe dreamweaver_.svg";
import adobeIllustratorIcon from "../icons/🦆 icon _adobe illustrator_.svg";
import figmaIcon from "../icons/🦆 icon _figma logo_.svg";
import afterEffectsIcons from "../icons/🦆 icon _adobe after effects_.svg";

const SkillList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={photoshopIcon}></img>
        <div className={styles.skillLevelContainer}>
          <h4>Adobe Photoshop</h4>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <img src={dreamWeaver}></img>
        <div className={styles.skillLevelContainer}>
          <h4>Adobe Dreamweaver</h4>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "35%" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <img src={adobeIllustratorIcon}></img>
        <div className={styles.skillLevelContainer}>
          <h4>Adobe Illustrator</h4>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <img src={figmaIcon}></img>
        <div className={styles.skillLevelContainer}>
          <h4>Figma</h4>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <img src={afterEffectsIcons}></img>
        <div className={styles.skillLevelContainer}>
          <h4>Adobe After Effects</h4>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
