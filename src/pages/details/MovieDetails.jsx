import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieDetails.css";
import Stars from "../../components/stars/Stars";
import { FaPlay, FaDownload, FaClock, FaArrowLeft } from "react-icons/fa";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const token = import.meta.env.VITE_TOKEN_TMDB;

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&append_to_response=videos`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
          }
        }
      );

      const data = await res.json();
      setMovie(data);

      if (data.genres) {
        setGenres(data.genres.map((g) => g.name).join(", "));
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  const backdropUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const trailer = movie.videos?.results?.find(v => v.type === "Trailer" && v.site === "YouTube");
  const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;

  return (
    <div className="movie-details" style={{ backgroundImage: `url(${backdropUrl})` }}>
      <div className="overlay">
        <div className="details-content">
          <button className="back-button" onClick={() => navigate("/")}>
            <FaArrowLeft /> Voltar
          </button>
          <div className="overview">
          <h1>{movie.title}</h1>
          <Stars rating={movie.vote_average} />
          <p><strong>Gênero:</strong> {genres}</p>
         <p><strong>Lançamento:</strong> {new Date(movie.release_date).toLocaleDateString("pt-BR")}</p>

          <p>{movie.overview}</p>
          </div>
          <div className="action-buttons">
            {trailerUrl && (
              <a href={trailerUrl} target="_blank" rel="noopener noreferrer" className="btn">
                <FaPlay /> Assistir Trailer
              </a>
            )}
            
            <button className="btn">
              <FaPlay /> Assistir Filme
            </button>
            <button className="btn">
              <FaDownload /> Baixar
            </button>
            <button className="btn">
              <FaClock /> Assistir Depois
            </button>
          </div>

          {trailerUrl && (
            <div className="trailer">
              <iframe
                width="30%"
                height="200"
                src={trailerUrl}
                title="Trailer"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
