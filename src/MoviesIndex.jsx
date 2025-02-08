export function MoviesIndex ({ movies, onShow }) {
  return (
    <div>
    <p>
      i'm so hungry { movies }
    </p>
    <button type="button" onClick={onShow}>More Info</button>
    </div>
  )
}