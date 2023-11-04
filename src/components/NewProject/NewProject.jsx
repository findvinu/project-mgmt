import { useRef } from "react";
import Input from "../Input";
import "./NewProject.css";
import Modal from "../Modal/Modal";

const NewProject = ({ onAddNewProject, onCancelAddProject }) => {
  const modal = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const addProjectHandler = () => {
    const formData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };

    if (
      formData.title.trim() === "" ||
      formData.description.trim() === "" ||
      formData.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddNewProject({ formData });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Oops looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="newProject">
        <menu>
          <li>
            <button className="cancelBtn" onClick={onCancelAddProject}>
              Cancel
            </button>
          </li>
          <li>
            <button className="saveBtn" onClick={addProjectHandler}>
              Save
            </button>
          </li>
        </menu>
        <div className="inputWrapper">
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
