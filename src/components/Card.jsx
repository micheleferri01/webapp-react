import { Link } from "react-router"


export default function Card({ movie }) {
    return <>
        <div className="col">
            <div className="card h-100 bg-black">
                <div>
                    <img src={movie.image} alt={movie.title} className="film-poster" />
                </div>
                <div className="py-3 px-2 text-white">
                    <h1>{movie.title}</h1>
                    <div className="d-flex justify-content-end">
                        <Link to={`/${movie.id}`} className="btn btn-primary">More info</Link>
                    </div>
                </div>
            </div>

        </div>
    </>
}