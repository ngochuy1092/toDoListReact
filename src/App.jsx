import { useState } from 'react';  
import {Display} from "./dipslay_task"



export default function App() {  
  const [todos, setTodos] = useState([]);  
  const [inputValue, setInputValue]= useState('');

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
   };
  
  const displayList = () => {    
    const task= {
      id: todos.length === 0 ? 1 : todos[todos.length-1].id + 1,
      inputValue: inputValue , 
      completeTask: false
    }
    setTodos([...todos, task]);   
    // Clear the input after adding a todo   
    setInputValue('');
     };
  const completeTask = (id)=> {
    const newTodoList = todos.map ((value)=> {
     if(id===value.id) {      
       value.completeTask= true    
     }
     return (value);
    })
    console.log(newTodoList);
    setTodos(newTodoList);
  }

  const deleteList = (id) => {
    const newTodoList = todos.filter((value)=> {      
      if (value.id===id) {
        return (
          false
        )
      }
      else {
        return true
      }
    })    
    setTodos(newTodoList);
  }
  console.log(todos);
  return (
    <div>
      <div>
        <input onChange={changeInputValue} value={inputValue} type="text" />
        <button onClick={displayList}>Add list</button>
      </div>
      <div>        
        {        
        todos.map((task) => (
          <Display isGreen={task.completeTask} inputValue={task.inputValue} id={task.id} deleteList={deleteList} completeTask={completeTask}/>          
        ))}
      </div>
    </div>
  );
}