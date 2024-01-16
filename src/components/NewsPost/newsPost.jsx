import React from "react";
import "./newsPost.scss";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const NewsPost = ({ urlToImage, content, title, id, author, publishedAt }) => {
  const navigate = useNavigate();
  
  const navigateToSingleNews = () => {
    navigate(`/news/${id}`, {
      state: {
        title,
        author,
        publishedAt,
        urlToImage,
        content,
      },
    });
  };

  // console.log(new Date(date).getDay())
  // console.log(new Date(date).getMonth())

  return (
    <div onClick={navigateToSingleNews} className="posts-item" id={id}>
      <h3>{title.substring(0, 120) + "..."}</h3>
      <div className="posts-item__info">
        <div className="posts-item__author">{author}</div>
        <div className="posts-item__date">
          {format(new Date(publishedAt), "dd")}
          <span>/</span>
          <span>{format(new Date(publishedAt), "MM")}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsPost;
