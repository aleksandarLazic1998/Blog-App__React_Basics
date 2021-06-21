import { useState } from "react";
import DivPreview from "./Preview.js";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [gender, setGender] = useState("Male");
  const [active, setActive] = useState(true);
  const [formClass, setFormClass] = useState("preview__form");

  // Method for changing class
  const handlePreview = (e) => {
    setActive(!active);
    setFormClass(active ? "active" : "preview__form");
  };

  //   Method to create object for API
  const handleSubmit = (e) => {
    e.preventDefault();
    // const blogObject = { title, body, author };
  };

  //   Method to change Values in form if User Wants to change informations
  const handleExit = () => {
    console.log("clicked");
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
      <button onClick={handlePreview}>Check Before Submit</button>
    </div>
  );
};

export default Form;
