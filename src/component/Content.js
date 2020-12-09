import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/actions/todoActions";
import Add from "../svg/add";
import TaskRenderer from "./TaskRenderer";
import Notify from "./notification";

const Content = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const textInput = useRef(null);
  const tasks = useSelector((state) => state.todo.tasks);
  const { type } = useSelector((state) => state.textBox);

  useEffect(() => {
    textInput.current.focus();
  }, [type]);

  const handleTextChange = () => {
    if (text.length < 1) {
      Notify();
    } else {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className='mb-3'>
      <div className='input-group mb-3'>
        <input
          className='form-control border-right-0'
          placeholder={type === "add" ? "Add task" : "Search task"}
          value={text}
          ref={textInput}
          onChange={(e) => setText(e.target.value)}
        />
        {type === "add" && (
          <span className='input-group-append'>
            <button
              className='btn btn-background border border-left-0'
              type='button'
              onClick={handleTextChange}>
              <Add />
            </button>
          </span>
        )}
      </div>
      <TaskRenderer text={text} tasks={tasks} />
    </div>
  );
};

export default Content;
