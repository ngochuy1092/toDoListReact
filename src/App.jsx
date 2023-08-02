import { useState } from 'react';

function App() {
  let inputValue;
  const [todos, setTodos] = useState([]);

  const changeInputValue = (event) => {
  inputValue =(event.target.value);  };

  const displayList = () => {   
      setTodos(function a(previousTodos) { return( [...previousTodos, inputValue])});
      // Clear the input after adding a todo    
  };

  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} type="text" />
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
