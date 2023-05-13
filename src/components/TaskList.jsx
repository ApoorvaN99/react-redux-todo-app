import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../actions';

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Tasks:</h3>
        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task.id} className="task">
              {task.text}
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete task
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
