import React from "react";
import PropTypes from "prop-types"; //propTypes: 부모로부터 전달받은 prop의 데이터type을 검사
import "./Movie.css"

// 클래스 안에는 this가 있지만, functional 컴포넌트는 this가 필요 x
function Movie({ year, title, summary, poster, genres }) { // Movie안에 year, title, summary, poster, genres 추가
  return ( 
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__geres">
          {genres.map((genre, index ) => ( // genres를 array해주기
            <li key={index} className="genres__genre">{genre}</li> 
                                                                   // map에 있는 각각 item은 key가 필요 but ID가 없어 제공할 키 x
                                                                   // map function은 또다른 argument를 줘 index를 추가
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
       </div>
    </div>
  )
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired // props에 array포함시키기
  };

  export default Movie;
