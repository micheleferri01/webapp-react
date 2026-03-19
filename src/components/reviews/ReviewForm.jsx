import { useState } from "react"
import axios from "axios"


export default function ReviewForm({ movie_id, getMovie }) {
    const formInitialData = {
        name: "",
        text: "",
        vote: ""
    };

    const [formData, setFormData] = useState(formInitialData);

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const storeReview = () => {
        axios.post(`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/${movie_id}/reviews`, formData)
            .then((res) => {console.log(res.data)})
            .catch((err) => {console.log(err.message)});
    };

    const handleFormSubmit = (e) => {
        e.preventDeafault();
        storeReview();
        setFormData(formInitialData);
        getMovie(movie_id);
    };
    return (
        <section className="bg-white rounded py-4 px-3 w-50">
            <h1>Add review</h1>
            <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-3">
                <div>
                    <label htmlFor="name" className="form-label">Username</label>
                    <input value={formData.name} onChange={handleInputChanges} type="text" name="name" id="name" className="form-control" />
                </div>
                <div>
                    <label htmlFor="vote" className="form-label">Vote</label>
                    <input value={formData.vote} onChange={handleInputChanges} type="number" name="vote" min={0} max={5} id="vote" className="form-control" />
                </div>
                <div>
                    <label htmlFor="text" className="form-label">Text</label>
                    <textarea value={formData.text} onChange={handleInputChanges} id="text" name="text" className="form-control"></ textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success">Post</button>
                </div>
            </form>
        </section>
    )
}