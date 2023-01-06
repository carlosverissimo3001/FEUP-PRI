import React from "react";
import star from "../star.svg";

const MovieCard = ({
  movie: {
    id,
    year,
    votes,
    certificate,
    poster,
    title,
    genres,
    directors,
    runtime,
    rating,
    stars,
    description
  },
}) => {
  return (
    <div className="movie" key={id}>
      <div>
        <p>{year}</p>
        {directors.length > 0 &&
          directors.map((director, i) => (
            <span key={i}>
              {director}
              {i !== directors.length - 1 ? ", " : ""}
            </span>
          ))}
        <p>{runtime + " minutes"}</p>
        <p>{certificate}</p>
        <br></br>
        {stars?.length > 0 &&
          stars.map((star, i) => (
            <p key={i}>
              {star}
              {i !== stars.length - 1 ? "" : ""}
            </p>
          ))}
        <br></br>
        {description?.length < 250 && (
          <p className="description">{description}</p>
        )}
      </div>

      <div>
        <img
          src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"}
          alt={title}
        />
      </div>

      <div>
        <a className="imdb-link" href={`https://www.imdb.com/title/${id}`} target="_blank" rel="noreferrer" title="See on IMBD">
          <h3>{title}</h3>
          {genres.length > 0 &&
          genres.map((genre, i) => (
            <span key={i}>
              {genre}
              {i !== genres.length - 1 ? ", " : ""}
            </span>
          ))}
        <br></br>
        <span className="rating">
          <img src={star} alt="star" style={{ translate: "-3px 13px" }} />
          <strong>{rating}</strong>
          {"/10"}
          <p className="votes"> {votes.toString().substring(0, 2) + "k"}</p>
        </span>
        </a>

      </div>
    </div>
  );
};

export default MovieCard;
