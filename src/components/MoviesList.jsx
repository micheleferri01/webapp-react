import axios from "axios"
import { useState, useEffect } from 'react'
import Card from "./Card";

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    useEffect(fetchMovies, []);

    function fetchMovies() {
        axios.get(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`)
            .then((res) => {
                setMovies(res.data.results);
                console.log(res.data.results);
            })
            .catch((err) => { console.log(err.message); });
    };
    if (movies.length > 0) return (<>
        <div className="row row-cols-3 g-3">
            {
                movies.map((movie) => (
                    <Card movie={movie} key={movie.id} />
                ))
            }
        </div>
    </>)
}