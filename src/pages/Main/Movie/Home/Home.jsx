import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMovieContext } from '../../../../context/MovieContext';
import MovieCards from '../../../../components/MovieCards/MovieCards';


const Home = () => {
  const navigate = useNavigate();
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { movieList, setMovieList, setMovie } = useMovieContext();


  const getMovies = () => {
    axios
      .get('/movies')
      .then((response) => {
        const movies = response.data;
        setMovieList(movies);

        if (movies.length) {
          const random = Math.floor(Math.random() * movies.length);
          setFeaturedMovie(movies[random]);
        }
      })
      .catch((error) => console.error('Failed to fetch movies:', error));
  };


  useEffect(() => {
    getMovies();
  }, []);


  const setSelectedMovie = (movie) => {
    console.log('Selected movie:', movie);
  };

  return (
    <div className="main-container">
      {featuredMovie && (
        <div
          className="featured-backdrop"
          style={{
            backgroundImage: `url(${
              featuredMovie.backdropPath
                ? `https://image.tmdb.org/t/p/original/${featuredMovie.backdropPath}`
                : featuredMovie.posterPath || 'placeholder-backdrop.jpg'
            })`,
          }}
          onClick={() => {
            setSelectedMovie(featuredMovie);
          }}
        >
          <div className="movie-details">
            <h1 className="featured-movie-title">{featuredMovie.title}</h1>
            <p className="movie-description">
              {featuredMovie.overview || 'No description available.'}
            </p>

            <button
               className="watch-now-button"
               onClick={() => { console.log('Navigating to movie ID:', featuredMovie.tmdbId);
               navigate(`/main/movies/view/${featuredMovie.tmdbId}`);}}>Watch Now
            </button>
          </div>
        </div>
      )}

      <p className="page-title">Trending Movies</p>
      {movieList && movieList.length ? (
        <div className="list-container">
          {movieList.map((movie) => (
            <MovieCards
              key={movie.id}
              movie={movie}
              onClick={() => {console.log('Navigating to movie ID:',  movie.tmdbId);
                navigate(`/main/movies/View/${movie.tmdbId}`);
                setMovie(movie);
              }}
            />
          ))}
        </div>
      ) : (
        <div>Loading movies...</div>
      )}

    </div>
  );
};

export default Home;