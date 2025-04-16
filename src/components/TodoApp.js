import React, { useState,useEffect } from "react";
import InputBox from "./InputBox";
import TodoData from "./TodoData";

const TodoApp=()=>{
    const[tasks,setTasks]=useState([]);
    const[filterTasks,setFilterTasks]=useState('all')
    const[searchTerm,setSearchTerm]=useState("");
  
    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasks(storedList);
        }
    },[])

    const filterData = tasks.filter(task => {
        const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
      });

    const filterTodos = filterData.filter(task => {
        if (filterTasks === 'completed') return task.completed;
        if (filterTasks=== 'pending') return !task.completed;
        return true; 
      });

     
      
    //   const applyFilter = (type) => {
    //     let filtered = [...tasks];
    //     if (type === "completed") {
    //       filtered = tasks.filter(task => task.completed);
    //     } else if (type === "pending") {
    //       filtered = tasks.filter(task => !task.completed);
    //     }
    //     setFilterTasks(filtered);
    //   };
    return(
        <>
        <div className="main-container">
            <h3 className="heading">Todo App</h3>
        </div>
            <div className="todo-app" >
            <InputBox tasks={tasks} setTasks={setTasks} setFilterTasks={setFilterTasks} setSearchTerm={setSearchTerm} filterData={filterData}/>
            <TodoData tasks={tasks} setTasks={setTasks} filterTodos={filterTodos} />
            </div>
        </>
    )
}
export default TodoApp;
