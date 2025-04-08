import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";

const InputBox = ({tasks,setTasks}) => {
  const[input,setInput]=useState("");
  const addHandler=()=>{
    if(input.trim()!==''){
        setTasks([...tasks,input]);
        console.log(input);
        setInput("");
    }
} 
  return (
    <div className=''>
      <input className="input-box" type="text" placeholder="Add your todos here..."
        value={input} onChange={e=>setInput(e.target.value)}/>
      <button className="add-btn" onClick={addHandler}>{<IoMdAddCircleOutline size={20}/>}</button>
    </div>
  )
}
export default InputBox;
