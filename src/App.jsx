import { useState } from 'react'

let listTodo=[];
function App() {
  let inputValue="";
  let [click, setClick]= useState("");
  

  const changeInputValue = (event)=> {
     inputValue= event.target.value;
  }
  const displayList= ()=> {    
    listTodo.push( <div>{inputValue}</div> );
    console.log(listTodo);   
    setClick(listTodo);
  }

  return (
    
    <div>
      <div> 
        <input onChange={changeInputValue} type="text" />
        <button onClick={displayList}>Add list</button>
      </div>

        {console.log(click)}
        {click}
      
    </div>
  )
}

export default App
