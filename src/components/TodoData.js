import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
const TodoData = ({tasks,setTasks}) => {
    const[input,setInput]=useState('');
    const[edit,setEdit]=useState(null);
    const deleteHandler=(id)=>{
        const newTodos=[...tasks];
        newTodos.splice(id,1);
        setTasks(newTodos);
        }  

    const editHandler=(id)=>{
        if(edit!==null){
            const updateTasks=[...tasks];
            updateTasks[edit]=input;
            setTasks(updateTasks);
            setEdit(null);    
            setInput(tasks[id]);
            setEdit(id);
        }
    
        }
  return (
    <div>
        <div>
            <ul>
                {
                    tasks.map((task,id)=>(
                        <div className="task-item" key={id}>
                            <input type="checkbox" className="strike"></input>
                            <span>{task}</span>
                            <button className="delete-btn" onClick={()=>deleteHandler(id)}><MdDeleteForever size={20} />
                            </button>
                            <button className="edit-todo" onClick={()=>editHandler(id)}><FaRegEdit size={20} />
                            </button>
                        </div>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}

export default TodoData;