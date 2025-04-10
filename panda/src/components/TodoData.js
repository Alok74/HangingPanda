import React, { useState} from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TodoData = ({ tasks, setTasks }) => {
    const [input, setInput] = useState('');
    const [edit, setEdit] = useState(null);
    const [completed, setCompleted] = useState(Array(tasks.length).fill(false));

    const deleteHandler = (id) => {
        const newTodos = [...tasks];
        const newCompleted = [...completed];
        newTodos.splice(id, 1);
        newCompleted.splice(id, 1);
        setTasks(newTodos);
        localStorage.setItem("localTasks", JSON.stringify(newTodos))
        setCompleted(newCompleted);

    };

    const editHandler = (id) => {
        if (!completed[id]) {
            setEdit(id);
            setInput(tasks[id]);
        }
    };

    const saveHandler = () => {
        const updatedTasks = [...tasks];
        updatedTasks[edit] = input;
        setTasks(updatedTasks);
        localStorage.setItem("localTasks", JSON.stringify(updatedTasks))
        setEdit(null);
        setInput('');
    };

    const toggleComplete = (id) => {
        const updateCompleted = [...completed];
        updateCompleted[id] = !updateCompleted[id];
        setCompleted(updateCompleted);

    };
    return (
        <div>
            <ul>
                {tasks.map((task, id) => (
                    <div className="task-item" key={id}>
                        <input
                            type="checkbox"
                            checked={completed[id]}
                            onChange={() => toggleComplete(id)}
                        />
                        {edit === id ? (
                            <input
                                className="edit-box"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onBlur={saveHandler}
                            />
                        ) : (
                            <span className={completed[id] ? 'completed-task' : ""}>
                                {task}
                            </span>
                        )}

                        <div className='btn-div'>
                            {edit === id ? (
                            <button className="save-btn" onClick={saveHandler}>
                               Save
                             </button>
                            ) : (
                            <>
                            <button className="delete-btn" onClick={() => deleteHandler(id)}>
                            <MdDeleteForever size={20} />
                             </button>
                            <button
                            className="edit-todo"
                            onClick={() => editHandler(id)}
                            disabled={completed[id]}
                            >
                            <FaRegEdit size={20} />
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