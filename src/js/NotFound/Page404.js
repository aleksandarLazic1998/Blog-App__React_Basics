import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not__found">
            <h1>Sorry Page Not Found</h1>
            <Link to="/">Go Back To The HomePage ... </Link>
        </div>
     );
}
 
export default NotFound;