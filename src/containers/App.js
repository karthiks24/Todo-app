import "../scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";
import Header from "./Header";
import TaskContainer from "./TaskContainer";

function App() {
  return (
    <div className='page-container'>
      <ReactNotification />
      <Header />
      <TaskContainer />
    </div>
  );
}

export default App;
