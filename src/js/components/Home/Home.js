// Importing styles
import "./css/Home.css";
// Importing components
import BlogList from "../BlogList/BlogList";
// Importing Custom Hook
import useFetch from "../shared/useFetch";

const Home = () => {
  const {
    data: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home_component">
      <h2 className="title">All Blogs:</h2>
      <div className="blog-list">
        {/* If error is occured render custom message in a div component */}
        {error && <div className="error__message">{error}</div>}
        {/* If the Page is Loading render the div with the custom message */}
        {loading && (
          <div className="loading">Data is Fetching Please Wait a Moment</div>
        )}
        {/* To hold the value of blog falsy then when it fetches the data render it to DOM */}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;
