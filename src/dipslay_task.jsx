
export const Display = (props) => {   
  return (
   <div>
     <h1 style={{ color : props.isGreen && "blue" }}>{props.inputValue}</h1>
     <button onClick={()=>  {props.deleteList(props.id)}} >Delete</button>
     <button onClick={()=> {props.completeTask(props.id)}} >completed</button>
   </div>
  ) 
 }

 