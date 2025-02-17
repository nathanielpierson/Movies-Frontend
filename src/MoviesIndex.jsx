export function MoviesIndex({ movies, onShow }) {
  console.log(recipes);
  
  return (
    <div id="movies-index">
      <h1>All recipes</h1>
      <div className="row">
        {movies.map(movie => (
          <div key={movie.id} className="col-md-4">
            <div className="card">
              <img src={movie.image_url} className="card-img-top" alt="..." height="200px" />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.directions}.</p>
                <button type="button" className="btn btn-primary" onClick={onShow}>More Info</button>
              </div>
            </div>
          </div>
        ))}
      </div>
     


    </div>
  );
}