import { useState } from 'react';

function App() {
  
  const [todos, setTodos] = useState([]);  
  const [inputValue, setInputValue]= useState('');

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
   };

  const displayList = () => {    
    setTodos(function a(previousTodos) { return( [...previousTodos, inputValue])});
    // Clear the input after adding a todo   
    setInputValue('');
   console.log(inputValue)
  };
  return (
    <div>
      <div>
        <input onChange={changeInputValue} value={inputValue} type="text" />
        <button onClick={displayList}>Add list</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <h1 key={index}>{todo}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
