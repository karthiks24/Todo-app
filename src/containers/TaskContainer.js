import Content from "../component/Content";
import Footer from "../component/Footer";
function TaskContainer() {
  return (
    <div className='page-section'>
      <div className='card  mb-3'>
        <div className='card-body'>
          <h1 className='card-title text-center'>Things To Do</h1>
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TaskContainer;
