import AddMovie from "./AddMovie";
import Header from "./Header";
import { MovieProvider } from "./MovieContext";
import MoviesList from "./MoviesList";
import "./styles.css";

export default function App() {
  return (
    <div>
      <MovieProvider>
        <Header />
        <AddMovie />
        <MoviesList />
      </MovieProvider>
    </div>
  );
}
