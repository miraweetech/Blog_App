import "./App.css";
import Header from "./component/Header";
import AuthorPage from "./component/view/AuthorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./component/view/Profile";
import Footer from "./component/Footer";
import Post from "./component/view/Post/Post";
import Post1 from "./component/view/Post/Post1";
import Post2 from "./component/view/Post/Post2";
import UserDetails from "./component/view/UserDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AuthorPage />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/page/:pageNum" element={<AuthorPage />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post1/:id" element={<Post1 />} />
          <Route path="/post2/:id" element={<Post2 />} />
          <Route path="/comment/:userId" element={<UserDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
