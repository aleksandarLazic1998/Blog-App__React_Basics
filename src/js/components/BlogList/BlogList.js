// Importing Style for Blog Components
import './BlogList.css';

const BlogList = ({blogs}) => {
    return ( 
        <div className="blog__container">
            {blogs.map(blog=>(
                <div className="blog__item" key={blog.id}>
                    <h3 className="blog__item__title">{blog.title}</h3>
                    <p className="blog__item__author">{blog.author}</p>
                </div>
            )
            )}
        </div>
     );
}
export default BlogList;