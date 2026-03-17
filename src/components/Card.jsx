


export default function Card({ movie }) {
    return <>
        <div className="col">
            <div className="card h-100">
                <div>
                    <img src={movie.image} alt={movie.title} className="film-poster" />
                </div>
                <div className="py-3 px-2">
                    <h1>{movie.title}</h1>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>

        </div>
    </>
}