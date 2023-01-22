import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import React from "react";
import AddNews from "./components/AddNews.js";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import "./App.css";
import SignIn from "./components/SignIn";
import Detail from "./components/Detail.js";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/news")
      .then((response) => setNews(response.data));
  }, []);

  const deleteNew = async (tidings) => {
    // silinecek haberin id si yardımı ile idsini silerek yeni listeyi oluşturuyoruz
    axios.delete(`http://localhost:3002/news/${tidings.id}`);
    const newNewsList = news.filter((n) => n.id !== tidings.id);
    setNews(newNewsList); // eski statemizi yeni haliyle değiştiriyoruz.
  };

  const addNews = async (tidings) => {
    await axios.post(`http://localhost:3002/news/`, tidings);
    setNews((news) => ({
      news: news.concat([tidings]),
    }));
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="row">
                <div className="col-lg-12"></div>
              </div>
              <NewsList news={news} deleteNew={deleteNew} />
            </div>
          }
        />
        <Route
          path="/add"
          news={news}
          setNews={setNews}
          element={
            <AddNews
              onAddNews={(news) => {
                addNews(news);
              }}
            />
          }
        />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/detail/:id" element={<Detail news={news} />} />
        <Route path="/admin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
