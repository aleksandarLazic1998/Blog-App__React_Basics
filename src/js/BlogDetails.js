import { useParams } from "react-router-dom";
import useFetch from "./components/shared/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      {/* If error is occured render custom message in a div component */}
      {error && <div className="error__message">{error}</div>}
      {/* If the Page is Loading render the div with the custom message */}
      {isLoading && (
        <div className="loading">Data is Loading Please Wait a Moment ...</div>
      )}
      {/* To hold the value of blog falsy then when it fetches the data render it to DOM */}
      {blog && (
        <article className="blog__article">
          <h2 className="blog__article__title">{blog.title}</h2>
          <p className="blog__article__author">Written by:{blog.author}</p>
          <div className="blog__article__body">{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
