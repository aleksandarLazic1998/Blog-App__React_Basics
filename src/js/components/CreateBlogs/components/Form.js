import { useState } from "react";
import DivPreview from "./Preview.js";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [gender, setGender] = useState("Male");
  const [active, setActive] = useState(true);
  const [formClass, setFormClass] = useState("preview__form");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  // Method for changing class
  const handlePreview = (e) => {
    setActive(!active);
    setFormClass(active ? "active" : "preview__form");
  };

  //   Method to create object for API
  const handleSubmit = (e) => {
    e.preventDefault();
    const blogObject = { title, body, author };
    setIsLoading(true);

    // POST METHOD
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogObject),
    }).then(() => {
      setIsLoading(false);
      history.push("/");
    });
  };

  //   Method to change Values in form if User Wants to change informations
  const handleExit = () => {
    setActive(!active);
    setFormClass(active ? "active" : "preview__form");
  };

  return (
    <div className="create">
      <h2>Create New Blog:</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        -{/* For Previewing Form Component */}
        <DivPreview
          title={title}
          body={body}
          author={author}
          gender={gender}
          formClass={formClass}
          handleExit={handleExit}
        />
      </form>
      {!isLoading && (
        <button onClick={handlePreview}>Check Before Submit</button>
      )}
      {isLoading && <button disabled>Adding Blog ...</button>}
    </div>
  );
};

export default Form;
