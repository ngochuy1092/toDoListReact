import { useState } from 'react'
let a=0;
let listTodo=[];
export default function App() {
  
  let inputValue="";
  const [click, setClick]= useState([]);  

  const changeInputValue = (event)=> {
     inputValue= event.target.value;
  }
  const displayList= ()=> {    
    listTodo.push("hi");     
    setClick(listTodo);  
  }
  a=a+1;
  return (    
    <div>
      <div> 
        <input onChange={changeInputValue} type="text" />
        <button onClick={displayList}>Add list</button>         
      </div>    
      {(console.log(a))}
      {click}
      {console.log(click)}          
    </div>
  )
} 
