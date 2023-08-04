import { useState  } from "react";
export default function App() {
  const [a, setA]= useState(1);
  const change= ()=> {
    setA(2)
  }
  console.log('hi')
  return (
    <div>
    <div>{a}</div>
    <button onClick={change}>button</button>
    </div>
  )
}