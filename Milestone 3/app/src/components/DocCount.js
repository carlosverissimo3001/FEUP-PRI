const DocCount = ({ docsFound, currentPage, perPage }) => {
    return (
        <div className="numdocs">
        {docsFound === 0 ? null : (
          <span>
            {" "}
            <strong>
              {currentPage * perPage - (perPage - 1)}-
              {currentPage !== Math.ceil(docsFound / perPage)
                ? currentPage * perPage
                : docsFound}{" "}
            </strong>
            of {docsFound} movies
          </span>
        )}
      </div>
    )
}

export default DocCount;