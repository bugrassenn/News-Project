import React from "react";
import { Link } from "react-router-dom";

const NewsList = ({ news, deleteNew }) => {
  return (
    // prop ile aldığımız news nesnesini mapliyoruz ve her bir haberi ayrı card içinde gösteriyoruz
    <div className="row">
      {news.map((tidings, i) => (
        <div className="col-lg-4" key={i}>
          <div className="card mb-3 shadow-sm">
            <img
              className="card-img-top"
              src={tidings.imageURL}
              alt="Sample News"
            />
            <div className="card-body">
              <h3 className="card-title">{tidings.name}</h3>
              <div className="d-flex align-items-center justify-content-between">
                <button // deletNew buttonuna onclick olarak tıklanılan elemanın silinmesini söylüyoruz deleteNew fonksiyonu App.js içinde çünkü eleman oradan silinecek
                  type="button"
                  onClick={(event) => deleteNew(tidings)}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete News
                </button>
                <Link to={`/detail/${tidings.id}`} className="Link">
                  News Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
