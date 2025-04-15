import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";


const InputBox = ({ tasks, setTasks,setFilterTasks,searchTerm,setSearchTerm}) => {
  const [input, setInput] = useState("");
  const addHandler = () => {
    const trimmedInput = input.trim();
    const isDuplicate=tasks.some((task)=>task.text.toLowerCase()===trimmedInput.toLowerCase());
    if(isDuplicate){
      alert("This task is already exist");
    }
    if (trimmedInput !== '' && !isDuplicate) {
      const newTask = {
        text: trimmedInput,
        completed: false
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
      setInput("");
    }
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      addHandler();
    }
  };
  const deleteAllTodos = () => {
    setTasks([]);
    localStorage.setItem("localTasks", JSON.stringify([]));
  };


  
  // const filteredTasks = tasks.filter(task =>
  //   task.text.toLowerCase().includes(searchText.toLowerCase())
  // );
  
  
  
  return (
    <div>
     
      <span className='flex ml-auto mr-auto text-white mt-6'>
        <button className='h-9 rounded ml-[30px] w-[80px] border-zinc-900 bg-[#15803d] '
        onClick={()=>setFilterTasks('all')}>All Todos </button>
        <button className='h-9 w-[100px] ml-[30px] rounded border-zinc-900  bg-[#15803d]'
         onClick={()=>setFilterTasks('completed')}>Completed </button>
                 <button className='h-9 ml-[30px] w-[80px]  rounded border-zinc-900  bg-[#15803d]'
         onClick={()=>setFilterTasks('pending')}>Pending </button>
         <button className=' bg-[#15803d] ml-[30px] w-[120px] rounded mr-5' onClick={deleteAllTodos} >Delete All Todos</button>
         </span>
         <div className='flex'>
         <h3 className='task-heading'>Tasks</h3> 
          <div className='flex'>
         <input type='text' className='h-[35px] w-[200px] rounded-3xl mt-6 ml-[180px]' placeholder='   Search your todo...'
          value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <IoIosSearch size={22} className='mt-8 -ml-8' />

                   </div> 
      </div>
      <div className='input-container'>
        <input
          className="input-box"
          type="text"
          placeholder="  Add your todos here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={keyPressHandler}
        />
        <div className='add-btn-container'>
          <button className="add-btn" onClick={addHandler}>
            <IoMdAddCircleOutline size={15} className='add-icon'/>
            <span className='add-task-heading'>
              <p className='add-heading'>Add Tasks</p>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
