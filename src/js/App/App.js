import "./App.css";
// Importing Components
import Navbar from "../components/Navbar/Navbar";
import CreateComponent from "../components/CreateBlogs/CreateBlogs";
import Home from "../components/Home/Home";
// Importing Router,Routes,Switch
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route>
            <CreateComponent exact path="/create" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
