import { initialState } from "../initialState";
import {
  ADD_TASKS,
  UPDATE_TASKS,
  TEXTBOX_TYPE,
  CATREGORIZE,
} from "../actions/todoActions";
import { v1 } from "uuid";

export function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TASKS:
      const id = v1();
      let newTask = {
        id,
        content: action.task,
        isActive: true,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case UPDATE_TASKS:
      const updatedTasks = state.tasks.map((value) => {
        if (value.id === action.taskId) {
          console.log("same id", value.id);
          value.isActive = !value.isActive;
        }
        console.log(value);
        return value;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
}

export function textBox(state = initialState.textBoxType, action) {
  switch (action.type) {
    case TEXTBOX_TYPE:
      return {
        ...state,
        type: action.textType,
      };
    case CATREGORIZE:
      return {
        ...state,
        categoryType: action.categoryType,
      };
    default:
      return state;
  }
}
