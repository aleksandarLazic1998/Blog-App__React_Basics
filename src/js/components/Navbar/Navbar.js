// Importing Styles
import './navigation.css';

const Navbar = () => {
    return ( 
        <div className="navigation">
            <h1 className="title__heading" href="/">
            <a className="title__heading__link" href="/">My Blogs</a>
            </h1>
            <div className="navigation__links">
                <a className="navigation__links__link" href="/">Home</a>
                <a className="navigation__links__link" href="/create">Create New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;