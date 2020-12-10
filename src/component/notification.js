import { store } from "react-notifications-component";

const Notify = () => {
  store.addNotification({
    title: "Task not added",
    message: "Text is empty!",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};

export const Notifycheck = () => {
  store.addNotification({
    title: "Acion cannot be done",
    message: "Checkbox is disabled!",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  });
};
export default Notify;
