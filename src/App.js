import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieContextProvider from './context/MovieContext';


import Login from './pages/Public/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Public/Login/Register/Register'; // Import Register component
import Home from './pages/Main/Movie/Home/Home';
import View from './pages/Main/Movie/View/View';
import Castlist from './pages/Main/Movie/View/Castlist';
import VideoList from './pages/Main/Movie/View/Videolist';
import Photoslist from './pages/Main/Movie/View/Photolist';



const router = createBrowserRouter([
  {
    path: '/',              
    element: <Login />,
  },
  {
    path: '/register',        
    element: <Register />,
  },
  {
    path: '/main',
    element: <Main />,
    children: [
        {
          path: '/main/movies/home',
          element: <Home />,
        },
        {
            path: '/main/movies/view/:movieId',
            element: <View />,                     
        },
        {
          path: '/main/movies/castlist/',
          element: <Castlist />,
        },
        {
          path: '/main/movies/videolist/',
          element: <VideoList />,
        },
        {
          path: '/main/movies/photolist/',
          element: <Photoslist />,
        },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <MovieContextProvider>
        <RouterProvider router={router} />
      </MovieContextProvider>
    </div>
  );
}

export default App;
