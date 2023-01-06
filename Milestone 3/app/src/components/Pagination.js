const Pagination = ({ searchTerm, currentPage, searchMovies, docsFound, setCurrentPage, perPage }) => {
    return(
        <div className="pagination">
        <div>
          <button
            className="pagination-button-symbol"
            onClick={() => {
              setCurrentPage(1);
              searchMovies(searchTerm, 1, perPage);
            }}
            disabled={currentPage === 1}
            style={{ cursor: currentPage === 1 ? "default" : "pointer" }}
            title="Go to first page"
          >
            &lt;&lt;
          </button>
        </div>

        <div>
          <button
            className="pagination-button-symbol"
            onClick={() => {
              setCurrentPage(currentPage - 1);
              searchMovies(searchTerm, currentPage - 1, perPage);
            }}
            disabled={currentPage < 2}
            style={{ cursor: currentPage < 2 ? "default" : "pointer" }}
            title={currentPage < 2 ? "No previous page" : "Go to previous page"}
          >
            &lt;
          </button>
        </div>

        {currentPage <= 2 &&
          Array.from(Array(Math.ceil(docsFound / perPage)).keys())
            .slice(0, 5)
            .map((page) => (
              <div>
                <button
                  className={
                    page === currentPage - 1
                      ? "pagination-button-current"
                      : "pagination-button"
                  }
                  onClick={() => {
                    setCurrentPage(page + 1);
                    searchMovies(searchTerm, page + 1, perPage);
                  }}
                  title={`Go to page ${page + 1}`}
                >
                  {page + 1}
                </button>
              </div>
            ))}

        {Array.from(Array(Math.ceil(docsFound / perPage)).keys())
          .slice(currentPage - 3, currentPage + 2)
          .map((page) => (
            <div>
              <button
                className={
                  page === currentPage - 1
                    ? "pagination-button-current"
                    : "pagination-button"
                }
                onClick={() => {
                  setCurrentPage(page + 1);
                  searchMovies(searchTerm, page + 1, perPage);
                }}
                title={`Go to page ${page + 1}`}
              >
                {page + 1}
              </button>
            </div>
          ))}

        <div>
          <button
            className="pagination-button-symbol"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              searchMovies(searchTerm, currentPage + 1, perPage);
            }}
            disabled={currentPage >= Math.ceil(docsFound / perPage)}
            style={{
              cursor:
                currentPage >= Math.ceil(docsFound / perPage)
                  ? "default"
                  : "pointer",
            }}
            title={currentPage >= Math.ceil(docsFound / perPage) ? "No next page" : "Go to next page"}
          >
            &gt;
          </button>
        </div>

        <div>
          <button
            className="pagination-button-symbol"
            onClick={() => {
              setCurrentPage(Math.ceil(docsFound / perPage));
              searchMovies(searchTerm, Math.ceil(docsFound / perPage), perPage);
            }}
            disabled={currentPage >= Math.ceil(docsFound / perPage)}
            style={{
              cursor:
                currentPage >= Math.ceil(docsFound / perPage)
                  ? "default"
                  : "pointer",
            }}
            title="Go to the last page"
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    )
}

export default Pagination;

