import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import {fetchPokemon} from "../api/fetchPokemon";
import Footer from "../components/Footer";

import {PokemonDetails} from "../types/types";
import styles from "./pokemon.module.css";
import LoadingScreen from "../components/LoadingScreen";

const Pokemon = () => {
  const [isloading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const {name} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true);
      const fetchedPokemon = await fetchPokemon(name as string);
      setPokemon(fetchedPokemon);
      setIsLoading(false);
    }

    getPokemon();
  }, [name]);

  if (isloading || !pokemon) return <LoadingScreen />;

  return (
    <>
      <button
        className={styles.pokeballButton}
        onClick={() => navigate(-1)}>
        <img
          className={styles.pokeballImg}
          src={PokeballImg}
          alt="pokeballImg"
        />
        Go back
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <div className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
          <div>Nr. {pokemon?.id} </div>
          <div>
            <img
              className={styles.pokemonInfoImg}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div>HP: {pokemon?.hp} </div>
          <div>Attack: {pokemon?.attack} </div>
          <div>Defense: {pokemon?.defense} </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Pokemon;
