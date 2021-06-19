import "./css/BlogList.css";
import FirstLetterUp from "../shared/firstLetterUp";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog__container">
      {blogs.map((blog) => (
        <div className="blog__item" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3 className="blog__item__title">{blog.title}</h3>
            <p className="blog__item__author">{FirstLetterUp(blog.author)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
