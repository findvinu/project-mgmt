import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div>
      <header>
        <div>
          <h1>{project.title}</h1>
          <button onClick={onDelete}>Delete</button>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProject;
