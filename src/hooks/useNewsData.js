import axios from "axios";
import { useState, useEffect } from "react";

const NEWS_API_URL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=0d6b657de02e45cb9d5e5999f003a64e";

const useNewsData = () => {
  const [data, updateData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(NEWS_API_URL);
      updateData(response.data.articles);
    };
    fetchData();
  }, []);
  return data;
};

export default useNewsData;

