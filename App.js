
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import CreateTask from './Components/CreateTask';
import Task from './Components/Task';

function App() {
  return (
    <div className="App">
      <h2>thank you</h2>
      {/* <Task/>
      <CreateTask/> */}

      <BrowserRouter>
       <Routes>
        <Route path='/' element={<CreateTask/>}/>
        <Route path='/create' element={<CreateTask/>}/>
        <Route path='/todos' element={<Task/>}/>
        
       </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
