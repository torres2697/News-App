import React from "react";
import Main from "../Main/main";
import News from "../News/news";
import Contacts from "../Contacts/contacts";
import ErrorPage from "../Error/error";
import SingleNews from "../SingleNews/singleNews";
import { Routes, Route } from "react-router-dom";
const AppRouter = () => {
  return (
    <div className="section">
      <Routes>
        <Route path="/" exact  element={<Main />} />
        <Route path="/news" exact element={<News />} />
        <Route path="/news/:id" exact element={<SingleNews />} />
        <Route path="/contacts" exact element={<Contacts  />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
