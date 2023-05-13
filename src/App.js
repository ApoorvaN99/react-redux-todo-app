import './App.css';
import { TaskList } from './components/TaskList';
import { Task } from './components/Task';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Todo list</h1>
      <Task />
      <TaskList />
    </div>
  );
}

export default App;
