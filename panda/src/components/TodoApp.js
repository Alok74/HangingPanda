import React, { useState,useEffect } from "react";
import InputBox from "./InputBox";
import TodoData from "./TodoData";

const TodoApp=()=>{
    const[tasks,setTasks]=useState([]);
    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasks(storedList);
        }
    },[])
  
    return(
        <>
        <div className="main-container">
            <h3 className="heading">Todo App</h3>
        </div>
        <div className="todo-app">
        <InputBox tasks={tasks} setTasks={setTasks}/>
        <TodoData tasks={tasks} setTasks={setTasks}/>
        </div>
        </>
    )
}
export default TodoApp;
