import "./App.css";
import Header from "./component/Header";
import AuthorPage from "./component/view/AuthorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./component/view/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AuthorPage />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
