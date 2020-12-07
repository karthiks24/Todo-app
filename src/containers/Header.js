import Todo from "../svg/homework.svg";
const Header = () => {
  return (
    <nav>
      <img src={Todo} alt='Todo Logo' />
      <h4>TODO</h4>
    </nav>
  );
};
export default Header;
