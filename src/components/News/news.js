import React from "react";
import NewsPost from "../NewsPost/newsPost";
import useNewsData from "../../hooks/useNewsData";
import "./news.scss";

const News = () => {
  const news = useNewsData();
  console.log(news);
  return (
    <div className="news">
      <div className="container">
        <h2>
          Keep up <br />
          to date with
          <span> events</span>{" "}
        </h2>
        <div className="news-posts">
          {news &&
            news.map((item, index) => {
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
      </div>
    </div>
  );
};
export default News;
