import noProjectImage from "../../assets/no-projects.png";

import "./NoProjectSelected.css";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="noProjectdSelected">
      <img src={noProjectImage} alt="image" />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button onClick={onStartAddProject}>Create new project</button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
