import Add from "../svg/add";
import Search from "../svg/Search";
import { useDispatch, useSelector } from "react-redux";
import { textBoxType, categorizeType } from "../store/actions/todoActions";
function Footer() {
  const dispatch = useDispatch();
  const { type, categoryType } = useSelector((state) => state.textBox);
  const tasks = useSelector((state) => state.todo.tasks);
  let pendingTask = tasks?.filter((value) => value.isActive === true);

  const handleSearch = (type) => {
    dispatch(textBoxType(type));
  };

  const dispatchButtonType = (type) => {
    dispatch(categorizeType(type));
  };

  const svgStyles = (searchType) => {
    return searchType === type ? "btn active" : "btn";
  };

  const buttonStyles = (searchType) => {
    return searchType === categoryType ? "btn active" : "btn";
  };

  return (
    <div className='card-footer bg-color'>
      <button
        className={svgStyles("add")}
        type='button'
        checked={true}
        onClick={() => handleSearch("add")}>
        <Add />
      </button>
      <button
        className={`search ${svgStyles("search")}`}
        type='button'
        onClick={() => handleSearch("search")}>
        <Search />
      </button>
      <span className='vl' />
      <span>{`${pendingTask.length} items left`}</span>

      <div className='float-right'>
        <button
          type='button'
          className={buttonStyles("all")}
          onClick={() => dispatchButtonType("all")}>
          All
        </button>
        <button
          type='button'
          className={buttonStyles("active")}
          onClick={() => dispatchButtonType("active")}>
          Active
        </button>
        <button
          type='button'
          className={buttonStyles("completed")}
          onClick={() => dispatchButtonType("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
