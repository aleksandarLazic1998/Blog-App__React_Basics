// Importing Styles
import "./css/navigation.css";
// Importing Links for React ROuter
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <h1 className="title__heading">
        <Link to="/" className="title__heading__link">
          My Blogs
        </Link>
      </h1>
      <div className="navigation__links">
        <Link to="/" className="navigation__links__link">
          Home
        </Link>
        <Link to="/create" className="navigation__links__link">
          Create New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
