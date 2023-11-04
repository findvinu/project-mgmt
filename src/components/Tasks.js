import NewTasks from "./NesTasks";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2>Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {tasks.length === 0 && <p>This project does not has any tasks yet.</p>}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => onDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
