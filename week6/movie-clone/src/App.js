import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Movie from "./components/Movie";
// import {movies} from "./movieDummy.js";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebirity from "./pages/Celebirity";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/movie/:title" element={<MovieDetail/>} />
          <Route path="/tv" element={<TV/>} />
          <Route path="/person" element={<Celebirity/>} />
          <Route path="/*" element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
  
    </div>
  
  
  );
}

export default App;
