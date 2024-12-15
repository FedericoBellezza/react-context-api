import { BrowserRouter, Routes, Route } from "react-router-dom";

// Contexts
import { PostContext } from "./contexts/PostsContext";

// Layouts
import DefaultLayout from "./Layouts/DefaultLayout";

// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
// Post pages
import PostCard from "./Pages/Posts/PostCard";
import PostPage from "./Pages/Posts/PostPage";

function App() {
  // Fetch post list
  let globalData;
  const apiUrl = import.meta.env.VITE_API_URL;
  fetch(apiUrl + "/posts")
    .then((res) => res.json())
    .then((data) => {
      globalData = data;
    });

  return (
    <PostContext.Provider value={globalData}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage}></Route>
            <Route path="/about" Component={AboutPage}></Route>
            <Route path="/posts">
              <Route index Component={PostPage}></Route>
              <Route path=":id" Component={PostCard}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
