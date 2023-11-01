import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Movie from "./components/Movie";
// import {movies} from "./movieDummy.js";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebirity from "./pages/Celebirity";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/tv" element={<TV/>} />
          <Route path="/person" element={<Celebirity/>} />
          <Route path="/*" element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
  
    </div>
  
    // <div className="App">
    //   <div className="app-container">
    //     {movies.results.map((item, index)=>{
    //       return(
    //         <Movie poster_path={item.poster_path} title={item.title} vote_average={item.vote_average} overview={item.overview} key={index}/>
    //       )
    //     })}
    //   </div>
    // </div> 
  );
}

export default App;
