export function MoviesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handle submit');
    const params = new FormData(event.target)
    onCreate(params)
    event.target.reset()
  }
  
  return (
    <div id="movies-new">
      <h1>New recipe</h1>
      {/* get, post, patch, delete */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">Ingredients</label>
          <input type="text" className="form-control" id="ingredients" name="ingredients" />          
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Ttile</label>
          <input type="text" className="form-control" id="title" name="title" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          ingredients: <input type="text" name="ingredients" />
        </div>
        <div>
          Prep Time: <input type="text" name="prep_time" />
        </div>
        <div>
          IMmage url: <input type="text" name="image_url" />
        </div>
        <div>
          Directions: <input type="text" name="directions" />
        </div>
        <button type="submit">Create recipe</button>
      </form> */}
    </div>
  );
}