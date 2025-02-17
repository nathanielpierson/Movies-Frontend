export function MoviesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handle submit');
    const params = new FormData(event.target)
    onCreate(params)
    event.target.reset()
  }
  
  return (
 <p>MoviesNew here</p>
  );
}