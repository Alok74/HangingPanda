import React, { useState } from "react";
import InputBox from "./InputBox";
import TodoData from "./TodoData";

const TodoApp=()=>{
    const[tasks,setTasks]=useState([]);
    return(
        <>
        <div className="main-container">
            <h3 className="heading">Todo App</h3>
            <InputBox tasks={tasks} setTasks={setTasks}/>
            <TodoData tasks={tasks} setTasks={setTasks}/>
        </div>
        </>
    )
}
export default TodoApp;
