import "./css/CreateBlogs.css";

const CreateBlogs = () => {
  return (
    <div className="create">
      <h2>Create New Blog:</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" required />
        <label>Blog Body</label>
        <textarea required></textarea>
        <label>Blog Author</label>
        <input type="text" required />
        <label>Gender</label>
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlogs;
