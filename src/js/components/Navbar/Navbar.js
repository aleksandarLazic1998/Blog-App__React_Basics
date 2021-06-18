// This React Component is For Navigation Bar with two links first for /Home route, second for /Create route
const Navbar = () => {
    return ( 
        <div className="navigation">
            <h1 className="title__heading">My Blogs</h1>
            <div className="navigation__links">
                <a className="navigation__links__link" href="/">Home</a>
                <a className="navigation__links__link" href="/create">Create New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;