import axios from "axios"
import { useState, useEffect } from 'react'
import Card from "./Card"
import Loader from "./Loader"
import { useLoading } from "../contexts/loading"

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    useEffect(fetchMovies, []);

    const {setLoading, isLoading} = useLoading();
    
    setLoading(true);
    
    function fetchMovies() {
        axios.get(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}`)
            .then((res) => {
                setMovies(res.data.results);
                console.log(res.data.results);
            })
            .catch((err) => { console.log(err.message); })
            .finally(() => {setLoading(false);});
    };

    return isLoading? <Loader /> : <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                movies.map((movie) => (
                    <Card movie={movie} key={movie.id} />
                ))
            }
        </div>;
}