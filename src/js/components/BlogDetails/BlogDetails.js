import "./css/blogDetails.css";
import { useParams,useHistory } from "react-router-dom";
import useFetch from "../shared/useFetch";
import FirstLetterUp from "../shared/firstLetterUp";

const BlogDetails = () => {
  const history = useHistory();

  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

const handleDelete = () =>{
  fetch(`http://localhost:8000/blogs/${blog.id}`,{
    method: "DELETE"
  })
  .then(()=>{
    history.push('/');
  })
}

  return (
    <div className="blog-details">
      {/* If error is occured render custom message in a div component */}
      {error && <div className="error__message">{error}</div>}
      {/* If the Page is Loading render the div with the custom message */}
      {loading && (
        <div className="loading">Data is Loading Please Wait a Moment ...</div>
      )}
      {/* To hold the value of blog falsy then when it fetches the data render it to DOM */}
      {blog && (
        <article className="blog__article">
          <h2 className="blog__article__title">{blog.title}</h2>
          <p className="blog__article__author">
            Written by: {FirstLetterUp(blog.author)}
          </p>
          <div className="blog__article__body">{blog.body}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
