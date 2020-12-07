import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../store/actions/todoActions";

const TaskRenderer = (props) => {
  const { text, tasks } = props;
  const dispatch = useDispatch();
  const { type, categoryType } = useSelector((state) => state.textBox);

  /*search the task based on the input text */
  const filterTask = () => {
    let filteredList = tasks.filter((value) => value.content.includes(text));
    return filteredList;
  };

  const handleTaskChange = (value) => {
    dispatch(updateTask(value.id));
  };

  let taskData = type === "add" ? tasks : filterTask();
  if (categoryType === "active") {
    taskData = taskData.filter((value) => value.isActive === true);
  } else if (categoryType === "completed") {
    taskData = taskData.filter((value) => value.isActive === false);
  }

  return (
    taskData?.length > 0 &&
    taskData.map((value) => (
      <div className='form-check' key={value.uuid}>
        <div className='form-group'>
          <input
            key={value.uuid}
            className='form-check-input'
            type='checkbox'
            checked={!value.isActive}
            onClick={() => handleTaskChange(value)}
          />
        </div>
        <div
          key={value.uuid}
          className={`form-check-label ${value.isActive ? "" : "text-strike"}`}>
          {value.content}
        </div>
        <hr />
      </div>
    ))
  );
};

export default TaskRenderer;
