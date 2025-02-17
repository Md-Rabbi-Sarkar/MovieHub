import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/layout.jsx';
import Home from './page/Home.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './page/Login.jsx';
import Register from './page/Register.jsx';
import Newses from './page/Newses.jsx';
import Error from './Error.jsx';
import Allmovies from './page/Allmovies.jsx';
import Blogs from './page/Blogs.jsx';
import PrivateRoute from './Privateroute/PrivateRoute.jsx';
import Addmoive from './page/Addmoive.jsx';
import Favoritemovie from './page/Favoritemovie.jsx';
import Movie from './page/Movie.jsx';
import Update from './page/Update.jsx';
import FeaturedMovies from './component/FeaturedMovies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/allmovies',
        element: <Allmovies></Allmovies>,
        loader:()=>fetch('https://movie-hub-server-phi.vercel.app/movies')
      },
      {
        path:'/movies/:id',
        element:<PrivateRoute><Movie></Movie></PrivateRoute>,
        loader:({params})=>fetch(`https://movie-hub-server-phi.vercel.app/movies/${params.id}`)
      },
      {
        path:'/movie/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://movie-hub-server-phi.vercel.app/movies/${params.id}`)
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/newses',
        element:<Newses></Newses>
      },
      {
        path:'/addmovie',
        element:<PrivateRoute><Addmoive></Addmoive></PrivateRoute>
      },
      {
        path:'/favorite/:email',
        element:<PrivateRoute><Favoritemovie></Favoritemovie></PrivateRoute>,
        loader:({params})=>fetch(`https://movie-hub-server-phi.vercel.app/favorite/${params.email}`),
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
