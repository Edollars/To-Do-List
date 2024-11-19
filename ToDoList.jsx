
import React, {useState} from 'react';


function ToDoList(){
    const [tasks, setTasks] = useState(['Shower', 'Have Breakfast','Feed the Baby']);
    const [newTask, setNewTask] = useState('');


    function handleInputChange(){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() === ''){
            alert('Task cannot be empty');
            return;
        }
        setTasks(t=>[...t, newTask]);
        setNewTask('');
    }

    function deleteTask(index){
        const updatedTasks =tasks.filter((_, i)=>i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index === 0){
            alert('Task cannot be moved up');
            return;
        }
        const updatedTasks = [...tasks];
        [updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]];
        setTasks(updatedTasks);
    }

    function moveTaskDown(index){
        if(index === tasks.length - 1){
            alert('Task cannot be moved down');
            return;
        }
        const updatedTasks = [...tasks];
        [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
        setTasks(updatedTasks); 
    }

    return(
        <div className='ToDoList'>
            <h1>To Do List</h1>
            <div>
                <input type="text" placeholder='enter a task ...' value={newTask} onChange={handleInputChange}/>
                <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index)=> <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={()=> deleteTask(index)}>
                        Delete
                    </button>

                    <button className='move-button' onClick={()=> moveTaskUp(index)}>
                        Up
                    </button> 

                    <button className='move-button' onClick={()=> moveTaskDown(index)}>
                        Down
                    </button> 
                </li> )}
            </ol>

        </div>
    )
  
}
export default ToDoList;