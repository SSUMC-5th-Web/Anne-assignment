import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebirity from "./pages/Celebirity";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/movie/:title" element={<MovieDetail/>} />
          <Route path="/tv" element={<TV/>} />
          <Route path="/person" element={<Celebirity/>} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>} />

        </Routes>
      </BrowserRouter>
  
    </div>
  
  
  );
}

export default App;
