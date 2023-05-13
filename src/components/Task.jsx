import { addTodo } from '../actions';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

export const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addNewTask = () => {
    let item = inputRef.current.value;
    dispatch(addTodo(item));
    inputRef.current.value = '';
  };

  return (
    <div className="task-component">
      <div className="add-task">
        <label htmlFor="input">
          Enter your task
          <input required id="input" type="text" ref={inputRef} />
        </label>
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};
