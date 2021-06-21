import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import CreateComponent from "../components/CreateBlogs/CreateBlogs";
import Home from "../components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from '../NotFound/Page404';
import BlogDetails from "../components/BlogDetails/BlogDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {/* For Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* For Create New Blog Route */}
          <Route path="/create">
            <CreateComponent />
          </Route>
          {/* For Blog Details */}
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          {/* If User go to Non Matching Route */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
