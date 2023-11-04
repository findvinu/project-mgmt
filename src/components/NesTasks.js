import { useState } from "react";

const NewTasks = () => {
  const [enterTasks, setEnterTasks] = useState("");

  const handleChange = (event) => {
    setEnterTasks(event.target.value);
  };

  const handleClick = () => {
    setEnterTasks("");
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={enterTasks} />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default NewTasks;
