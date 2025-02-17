import { Footer } from './Footer';
import { Header } from './Header';
import { MoviesPage } from './MoviesPage';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <MoviesPage />
      </div>
      <Footer />
      
        
    </div>
  );
}

export default App;