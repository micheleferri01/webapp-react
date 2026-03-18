


export default function ReviewsCard({ review }) {
    return (
    <div className="bg-white py-4 px-2">
        <div className="d-flex gap-2 align-items-center">
            <div className="avatar">
                {review.name?.charAt(0)}
            </div>
            <p>{review.name}</p>
        </div>
        <p>{review.text}</p>
    </div>)

}