import Movie from "./components/Movie";
import {movies} from "./movieDummy.js";
import styled from 'styled-components';


function App() {
  const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 100px;
  `;

  return (
    <div className="App">
      <AppContainer>
        {movies.results.map((item, index)=>{
          return(
            <Movie poster_path={item.poster_path} title={item.title} vote_average={item.vote_average} overview={item.overview} key={index}/>
          )
        })}
      </AppContainer>
    </div> 
  );
}

export default App;
