import React from "react";
import "./singleNews.scss";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

const SingleNews = () => {
  const {
    state: { title, author, publishedAt, urlToImage, content },
  } = useLocation();

  // const titleToArr = title.split(" ");
  // const titleDeleteLastWord = titleToArr.pop();
  // const titleToStr = titleToArr.join(" ");

  var lastSpaceIndexTitle  = title.lastIndexOf(" ");
  var titleWithoutLastWord = title.substring(0,lastSpaceIndexTitle);
  var tilelastWord = title.substring(lastSpaceIndexTitle + 1);

  return (
    <div className="container">
      <div className="single-news-wrapper">
        <div className="single-news-info">
          <h2>
            {/* {titleToStr}   <span> {titleDeleteLastWord} </span> */}
            {titleWithoutLastWord} <span> {tilelastWord} </span>
          </h2>
          <span className="single-news-info__author">{author}</span>
          <div className="single-news-info__date">
            {" "}
            {format(new Date(publishedAt), "dd")}
            <span>/</span>
            <span>{format(new Date(publishedAt), "MM")}</span>
          </div>
        </div>
        <div className="single-news-content">
          <img src={urlToImage ? urlToImage : ""} alt="" />
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleNews;
