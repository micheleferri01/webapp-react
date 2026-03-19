import Rating from "../Rating";



export default function ReviewsCard({ review }) {
   
    return (
        <div className="bg-white py-4 px-2 review-bubble">
            <div className="d-flex gap-2 align-items-center">
                <div className="avatar">
                    {review.name?.charAt(0)}
                </div>
                <p className="m-0">{review.name}</p>
            </div>
            <p>{review.text}</p>
            <div className="fs-5"><Rating vote={review.vote}/></div>
        </div>)

}