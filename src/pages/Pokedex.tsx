import { useEffect, useRef, useState } from "react";
import axios from "axios";
import transition from "../Transition";
import PokedexBody from "../components/PokedexBody";

const Pokedex = () => {
  const [getOriginalPokemonList, setOriginalPokemonList] = useState<string[]>(
    []
  );

  const hasFetchedData = useRef(false);

  useEffect(() => {
    const fetchPokemonList = () => {
      axios({
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon?limit=300",
        responseType: "stream",
      }).then((response) => {
        Array.from(JSON.parse(response.data).results).forEach((result: any) => {
          fetchPokemon(result.url);
        });
      });
    };

    const fetchPokemon = (pokemonUrl: string) => {
      axios({
        method: "get",
        url: pokemonUrl,
        responseType: "stream",
      }).then((response) => {
        setOriginalPokemonList((prevArray) => [...prevArray, response.data]);
      });
    };

    if (hasFetchedData.current === false) {
      console.log("FetchingPokemonList");
      fetchPokemonList();
      hasFetchedData.current = true;
    }
  }, []);

  return (
    <>
      <PokedexBody originalList={getOriginalPokemonList} />
    </>
  );
};

export default transition(Pokedex);
