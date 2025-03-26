import axios from "axios";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MoviesPage } from "./MoviesPage";

axios.defaults.baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://contacts-api-0t45.onrender.com";
// axios.defaults.withCredentials = true;

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
