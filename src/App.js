import Home from './Home';
import db from './componants/db.json'
import { useState } from 'react';
function App() {
  const [toDoList, setToDoList] = useState(db)
  return (
    <div className="App">
       <Home />
    </div>
  );
}

export default App;
