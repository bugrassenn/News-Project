import React from "react";
import serialize from "form-serialize";

function AddNews({ onAddNews, setNews, news }) {
  const handleFormSubmit = (e) => {
    const newNews = serialize(e.target, { hash: true });
    onAddNews(newNews);
    e.target.reset();
  };

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <input
          className="form-control"
          id="disabledInput"
          type="text"
          placeholder="Fill The Form To Add A News.."
          disabled
        />
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Please news name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="imageURL"
              placeholder="Please news image"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Comment</label>
            <textarea
              className="form-control"
              name="comment"
              rows="5"
              placeholder="Please news comment"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-danger btn-block mt-3"
          value="Add News"
        />
      </form>
    </div>
  );
}

export default AddNews;
