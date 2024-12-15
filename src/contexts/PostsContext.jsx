import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  // Fetch post list
  const [globalData, setGlobalData] = useState();

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(apiUrl + "/posts")
      .then((res) => res.json())
      .then((data) => {
        setGlobalData(data);
        console.log(globalData);
      });
  }, []);
  return (
    <PostContext.Provider value={globalData}>{children}</PostContext.Provider>
  );
};
