import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import ReviewsCard from "../components/reviews/reviewsCard";
import ReviewForm from "../components/reviews/ReviewForm";

export default function MoviedetailsPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
    useEffect(() => { fetchMovie(id) }, []);

    function fetchMovie(movie_id) {
        axios.get(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/${movie_id}`)
            .then((res) => {
                const film = res.data.results[0];
                setMovie(film);
                const movieReviews = res.data.reviews;
                setReviews(movieReviews);
                console.log(movieReviews);
            })
            .catch((err) => { console.log(err.message) })
    };
    return <>

        {!movie && <h1 className="text-white text-align-center">Loading...</h1>}
        {movie && <section className="py-4 text-white">
            <h1 className="pb-3">{movie.title}</h1>
            <div className="d-flex gap-4">
                <div>
                    <img src={movie.image} alt={movie.title} className="film-poster" />
                </div>
                <ul className="list-unstyled fs-4">
                    <li><strong>Directed by:</strong> {movie.director}</li>
                    <li><strong>Genre:</strong> {movie.genre}</li>
                    <li><strong>Year of release:</strong> {movie.release_year}</li>
                    <li><strong>Description:</strong> {movie.abstract}</li>
                </ul>
            </div>
        </section>}
        <section className="pb-4">
            <h1 className="text-white">Reviews</h1>
            <ul className="list-unstyled">
                {reviews.map(review => (
                    <li key={review.id} className="mb-3">
                        <ReviewsCard review={review} />
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-center">
                <ReviewForm movie_id={id} getMovie={fetchMovie}/>
            </div>
        </section>
    </>
}