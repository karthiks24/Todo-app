export const ADD_TASKS = "ADD_TASKS";
export const TEXTBOX_TYPE = "TEXTBOX_TYPE";
export const UPDATE_TASKS = "UPDATE_TASKS";
export const CATREGORIZE = "CATREGORIZE";

export function addTask(task) {
  return {
    type: ADD_TASKS,
    task,
  };
}

export function updateTask(taskId) {
  return {
    type: UPDATE_TASKS,
    taskId,
  };
}

export function textBoxType(textType) {
  return {
    type: TEXTBOX_TYPE,
    textType,
  };
}

export function categorizeType(categoryType) {
  return {
    type: CATREGORIZE,
    categoryType,
  };
}
