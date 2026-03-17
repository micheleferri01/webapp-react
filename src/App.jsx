import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' Component={MoviesPage}/>
          <Route path='/:id' Component={MovieDetailsPage}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
