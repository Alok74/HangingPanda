import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineSave } from "react-icons/hi";

const TodoData = ({ tasks, setTasks,filterTodos }) => {
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(null);

  const deleteHandler = (id) => {
    const updatedTasks = tasks.filter((_, index) => index !== id);
    setTasks(updatedTasks);
    localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
  };

  const editHandler = (id) => {
    if (!tasks[id].completed) {
      setEdit(id);
      setInput(tasks[id].text);
    }
  };

  const saveHandler = () => {
    const updatedTasks = [...tasks];
    updatedTasks[edit].text = input;
    setTasks(updatedTasks);
    localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
    setEdit(null);
    setInput('');
  };

  const toggleComplete = (id) => {
    const updatedTasks = [...tasks];
    	console.log(updatedTasks[id]);
    updatedTasks[id].completed = !updatedTasks[id].completed;
    setTasks(updatedTasks);
    console.log(updatedTasks)
    localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <ul>
        {filterTodos.map((task, id) => (
          <div className="task-item" key={id}>
                <input
              className='round-checkbox'
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(id)}
            />          
            {edit === id ? (
              <input
                className="edit-box"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onBlur={saveHandler}
                autoFocus
              />
            ) : (
              <span className={task.completed ? 'completed-task' : ""}>
                {task.text}
              </span>
            )}

            <div className='btn-div'>
              {edit === id ? (
                <button className="save-btn" onClick={saveHandler}>
                  <HiOutlineSave size={22} />
                </button>
              ) : (
                <>
                  <button
                    className="edit-todo"
                    onClick={() => editHandler(id)}
                    disabled={task.completed}
                  >
                    <FaRegEdit size={20} />
                  </button>
                  <button className="delete-btn" onClick={() => deleteHandler(id)}>
                    <MdDeleteForever size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoData;
