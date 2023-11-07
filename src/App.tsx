import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import {Pokemon, Items, Pokemons} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/pokemons/:name" element={<Pokemon />} />
          <Route path="/pokemon" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
