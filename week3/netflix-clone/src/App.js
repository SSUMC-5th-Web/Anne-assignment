import Movie from "./components/Movie";
import {movies} from "./movieDummy.js";


function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item)=>{
          return(
            <Movie poster_path={item.poster_path} title={item.title} vote_average={item.vote_average}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
