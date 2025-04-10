import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";

const InputBox = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const addHandler = () => {
    const trimmedInput = input.trim();
    if (trimmedInput !== '') {
      setTasks([...tasks, trimmedInput]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, trimmedInput]));
      setInput("");
    }
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      addHandler();
    }
  };

  return (
    <div>
      <h3 className='task-heading'> Tasks</h3>
      <div className='input-container'>
      <input
        className="input-box"
        type="text"
        placeholder="Add your todos here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={keyPressHandler}
      />
      <button className="add-btn" onClick={addHandler}>
        <IoMdAddCircleOutline size={20} />
      </button>
    </div>
    </div>
  );
};

export default InputBox;
