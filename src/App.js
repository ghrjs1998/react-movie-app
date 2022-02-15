import React from "react";
import axios from "axios";
import Movie from "./Movie"; //movies.map으로부터 리턴할거 import한다
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get( // await는 async 함수 안에서만 동작
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating" // sort_by=rating을 사용해 movie를 정랼
    );
    this.setState({ movies, isLoading: false }); // movies를 state안에 넣기
  };
  componentDidMount() { // component가 mount되면 getMovie를 호출
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      // javascript에선 class를 쓰지만 react에서는 class 대신 className을 씀
      <section className="container">
        {isLoading ? ( 
          <div className="loader">
            <span className="loader__text_">Loading...</span>
          </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  /> //movies.map을 이용해 render한다
              ))}
            </div>
           )}
      </section>
            );
          }
        }

export default App;
        
