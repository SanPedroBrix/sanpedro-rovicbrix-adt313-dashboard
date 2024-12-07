import { Outlet } from 'react-router-dom';
import './Movie.css'

const Movie = () => {
  return (
    <>
    <div classname="title">
    <h1 style={{ color: 'Dark Red' }}>VIDEOcool</h1>
    </div>
      <Outlet />
    </>
  );
};

export default Movie;