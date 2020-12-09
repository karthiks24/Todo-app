import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../store/actions/todoActions";
import Checkbox from "./Checkbox";
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
      <>
        <Checkbox data={value} handler={handleTaskChange} />
        <hr />
      </>
      /*   <div className='form-check'>
        <div className='form-group'>
          <input
            key={value.id}
            className='form-check-input'
            type='checkbox'
            checked={!value.isActive}
            onClick={() => handleTaskChange(value)}
          />
        </div>
        <div
          key={value.id}
          className={`form-check-label ${value.isActive ? "" : "text-strike"}`}>
          {value.content}
        </div>
        <hr />
      </div> */
    ))
  );
};

export default TaskRenderer;
