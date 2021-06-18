// Importing Styles
import "./css/navigation.css";
// Importing LInks for React ROuter
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <h1 className="title__heading">
        <Link className="title__heading__link" to="/">
          My Blogs
        </Link>
      </h1>
      <div className="navigation__links">
        <Link className="navigation__links__link" to="/">
          Home
        </Link>
        <Link className="navigation__links__link" to="/create">
          Create New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
