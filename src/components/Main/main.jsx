import React from "react";
import { Link } from "react-router-dom";
import NewsPost from "../NewsPost/newsPost";
import useNewsData from "../../hooks/useNewsData";
import "./main.scss";

const Main = () => {
  const news = useNewsData();
  console.log(news);
  return (
    <div className="main">
      <div className="container">
        <h2>
          Always <br />
          the latest
          <span> news</span>{" "}
        </h2>
        <div className="main-posts">
          {news &&
            news
              .filter((item, index) => index <= 5)
              .map((item, index) => {
                return (
                  <NewsPost
                    id={index}
                    key={index}
                    title={item.title}
                    author={item.author}
                    publishedAt={item.publishedAt}
                    urlToImage={item.urlToImage}
                    content={item.content}
                  />
                );
              })}{" "}
        </div>
        <Link to="/news" className="main-more">
          Keep up to date with events
        </Link>
      </div>
    </div>
  );
};
export default Main;
