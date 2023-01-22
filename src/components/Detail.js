import React from "react";
import { useParams } from "react-router-dom";

function Detail({ news }) {
  const { id } = useParams(); // useParams ile tıklanılan nesnenin id sini tutuyoruz.
  const thisNews = news.find((prod) => prod.id === id); // useParams ile tutulan idyi kendi verilerimizde arıyoruz ve idsi eşleneni thisNews e atıyoruz.

  return (
    <div className="container text-center">
      <div className="col-lg-12 text-center">
        <h1 className="mb-3 text-center">{thisNews.name}</h1>
      </div>
      <div className="row">
        <div className="col-lg-12 detailsimagediv">
          <img
            src={thisNews.imageURL}
            alt="Sample News"
            className="detailsimage"
          />
        </div>
        <div className="col-lg-12">
          <p className="mt-3 fw-semibold">{thisNews.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
