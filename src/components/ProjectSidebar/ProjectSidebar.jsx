import "./ProjectSidebar.css";

const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <button onClick={onStartAddProject}>+ Add Project</button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses = "defaultClass";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-highlight-selected";
          } else {
            cssClasses += " not-selected";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.formData.title}
              </button>
              {console.log("project.id", project.id)}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
