import "./css/previewForm.css";
const DivPreview = ({ title, body, author, gender, formClass,handleExit}) => {

  

  return (
    <div className={formClass}>
      <span className="image__btn" onClick={()=> handleExit()}>
        &times;
      </span>

      <label>Blog Title:</label>
      <h2 className="preview__form__title">{title}</h2>

      <label>Blog Body:</label>
      <p className="preview__form__body">{body}</p>

      <label>Blog Author:</label>
      <p className="preview__form__author">{author}</p>

      <label>Gender:</label>
      <p className="preview__form__gender">{gender}</p>

      <button className="submitBtn" type="submit">
        Submit
      </button>
    </div>
  );
};

export default DivPreview;
