


export default function Rating ({vote, maxVote = 5}) {
    const stars = [];
    for (let i = 1; i <= maxVote; i++) {
        stars.push(<i key={i} className={i <= vote ? "bi bi-star-fill star-color" : "bi bi-star star-color"}></i>)
    }
    return stars
}