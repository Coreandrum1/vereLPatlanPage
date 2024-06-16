import "./SkillList.css";
import photoshopIcon from "../../icons/🦆 icon _adobe photoshop_.svg";
import dreamWeaver from "../../icons/🦆 icon _adobe dreamweaver_.svg";
import adobeIllustratorIcon from "../../icons/🦆 icon _adobe illustrator_.svg";
import figmaIcon from "../../icons/🦆 icon _figma logo_.svg";
import afterEffectsIcons from "../../icons/🦆 icon _adobe after effects_.svg";

const SkillList = () => {
  return (
    <main className="skillListContainer">
      <div className="item">
        <img alt="photoshop" src={photoshopIcon}></img>
        <div className="skillLevelContainer">
          <h4>Adobe Photoshop</h4>
          <div className="progressBar">
            <div className="progress" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="dreamweaver" src={dreamWeaver}></img>
        <div className="skillLevelContainer">
          <h4>Adobe Dreamweaver</h4>
          <div className="progressBar">
            <div className="progress" style={{ width: "35%" }}></div>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="illustrator" src={adobeIllustratorIcon}></img>
        <div className="skillLevelContainer">
          <h4>Adobe Illustrator</h4>
          <div className="progressBar">
            <div className="progress" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="figma" src={figmaIcon}></img>
        <div className="skillLevelContainer">
          <h4>Figma</h4>
          <div className="progressBar">
            <div className="progress" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>
      <div className="item">
        <img alt="after effects" src={afterEffectsIcons}></img>
        <div className="skillLevelContainer">
          <h4>Adobe After Effects</h4>
          <div className="progressBar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillList;
