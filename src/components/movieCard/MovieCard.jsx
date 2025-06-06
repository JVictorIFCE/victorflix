import { Link } from "react-router-dom"
import "./MovieCard.css"
import { FaStar } from "react-icons/fa"
import Stars from "../stars/Stars"

function MovieCard({movie}){
    return (
        <div className="movieCard">
            <img width="200" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt={movie.title} />
            <h3 className="movieTitle">{movie.title}</h3>
            <Stars rating={movie.vote_average} />
            
                <button> 
                    <Link to={`/details/${movie.id}`}>Ver Mais</Link>
                </button>
        </div>
    )
}

export default MovieCard