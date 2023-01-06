import React, { useState, useEffect } from "react";

import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";
import XIcon from "./x.svg";
import "./App.css";
import DocCount from "./components/DocCount";
import Pagination from "./components/Pagination";
import ScrollButton from "./components/ScrollButton";

const API_BASE_URL =
  "http://localhost:8983/solr/movies/select?defType=edismax&indent=true&q.op=OR&q=";
const SEARCH_OPTION = "~3&qf=keywords%20reviews%20description&wt=json";
const FETCH_ALL_URL =
  "http://localhost:8983/solr/movies/select?defType=edismax&indent=true&q.op=OR&q=*%3A*&qf=keywords%20reviews%20description&sort=popularity desc&wt=json";

var numSearches = 0;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("popularity");
  const [movies, setMovies] = useState([]);
  const [docsFound, setDocsFound] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    searchMovies("", 1, 30);
  }, []);

  const searchMovies = async (
    query,
    currentPage,
    moviesPerPage,
    isNewSearch = false
  ) => {
    // If query empty, search for all movies
    let url = query
      ? `${API_BASE_URL}%22${query.replace(
          " ",
          "%20"
        )}%22${SEARCH_OPTION}&start=${
          currentPage * perPage - perPage
        }&rows=${moviesPerPage}`
      : `${FETCH_ALL_URL}&start=${
          currentPage * perPage - perPage
        }&rows=${moviesPerPage}`;

    const response = await fetch(url);
    const data = await response.json();

    setDocsFound(data["response"]["numFound"]);

    if (numSearches >= 1 && query.length > 0) {
      if (isNewSearch)
        document.getElementById("sort-dropdown").value = "score desc";
    } else {
      if (isNewSearch) document.getElementById("sort-dropdown").value = "";
      setSearchTerm("");
    }

    setMovies(
      data["response"]["docs"].map((movie, score) => ({ ...movie, score }))
    );
  };

  const clearSearchMovies = async () => {
    searchMovies("", 1, perPage, true);
    setCurrentPage(1);
  };

  const handleKeyPress = async (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
      numSearches++;
      searchMovies(searchTerm, 1, perPage, true);
      setCurrentPage(1);
    }
  };

  const handleSort = async (e) => {
    setSortTerm(e.target.value.split()[0]);
    setMovies(
      movies.sort(
        (a, b) =>
          a[e.target.value.split(" ")[0]] > b[e.target.value.split(" ")[0]]
      )
    );
    console.log(e.target.value.split(" ")[0]);

    if (e.target.value.includes("desc")) {
      setMovies(movies.reverse());
    }
  };

  return (
    <div className="app">
      {/* On click, reload page */}
      <div className="header" onClick={() => window.location.reload()}>
        MovieLand
      </div>

      <div className="search">
        <img
          id="search-icon"
          src={searchTerm.length > 0 ? XIcon : SearchIcon}
          alt="search"
          onClick={searchTerm.length > 0 ? clearSearchMovies : () => {}}
        />
        <input
          onKeyDown={handleKeyPress}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type your query here..."
        />
      </div>

      <div className="filters">
        <div className="sort">
          <select
            name="sort"
            id="sort-dropdown"
            onChange={handleSort}
            defaultValue=""
          >
            <option value="" disabled>
              Sort By
            </option>
            <option value="score asc" disabled={numSearches === 0}>
              Relevance &uarr;
            </option>
            <option value="score desc" disabled={numSearches === 0}>
              Relevance &darr;
            </option>
            <option value="year asc">Year &uarr;</option>
            <option value="year desc">Year &darr;</option>
            <option value="popularity asc">Popularity &uarr;</option>
            <option value="popularity desc">Popularity &darr;</option>
            <option value="rating asc">Rating &uarr;</option>
            <option value="rating desc">Rating &darr;</option>
          </select>
        </div>

        <div className="perpage">
          <select
            name="perpage"
            id="perpage-dropdown"
            onChange={(e) => {
              setPerPage(e.target.value);
              searchMovies(searchTerm, currentPage, e.target.value);
            }}
            defaultValue={perPage}
          >
            <option value="10">10 per page</option>
            <option value="30">30 per page</option>
            <option value="50">50 per page</option>
          </select>
        </div>
      </div>

      {docsFound > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          docsFound={docsFound}
          perPage={perPage}
          searchTerm={searchTerm}
          searchMovies={searchMovies}
        />
      )}

      <DocCount
        docsFound={docsFound}
        perPage={perPage}
        currentPage={currentPage}
      />

      {movies?.length > 0 ? (
        <div className="container">
          {movies.slice(0, perPage).map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found &#128577;</h2>
        </div>
      )}

      {docsFound > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          docsFound={docsFound}
          perPage={perPage}
          searchTerm={searchTerm}
          searchMovies={searchMovies}
        />
      )}

      <ScrollButton />

      <DocCount
        docsFound={docsFound}
        perPage={perPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
