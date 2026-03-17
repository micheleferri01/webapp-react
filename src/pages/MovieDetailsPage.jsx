import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function MoviedetailsPage() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(fetchMovie,[]);

    function fetchMovie () {
        axios.get(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/${id}`)
            .then((res) => {
                const film = res.data.results[0];
                setMovie(film);
            })
            .catch((err) => {console.log(err.message)})
    }
    return <>
        <section className="py-4 text-white">
            <h1 className="pb-3">{movie.title}</h1>
            <div className="d-flex gap-4">
                <div>
                    <img src={movie.image} alt={movie.title} className="film-poster"/>
                </div>
                <ul className="list-unstyled fs-4">
                    <li><strong>Directed by:</strong> {movie.director}</li>
                    <li><strong>Genre:</strong> {movie.genre}</li>
                    <li><strong>Year of release:</strong> {movie.release_year}</li>
                    <li><strong>Description:</strong> {movie.abstract}</li>
                </ul>
            </div>
        </section>
    </>
}