const CreateBlogs = () => {
  return (
    <div className="create-blog-container">
      <h2 className="tag">Create New Blog</h2>
      <form>
        <label>Blog Title</label>
        <input type="text" required />
        <label>Blog Body</label>
        <textarea required></textarea>
        <label>Blog Author</label>
        <select>
          <option value="Aleksandar">ALeksandar</option>
          <option value="Marco">Marco</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlogs;
