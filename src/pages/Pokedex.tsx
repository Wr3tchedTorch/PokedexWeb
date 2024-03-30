import { useEffect, useRef, useState } from "react";
import CardsContainer from "../components/CardsContainer";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

const Pokedex = () => {
  var pokemonList: string[] = [];
  const [getPokemon, setPokemon] = useState<string[]>([]);
  const hasFetchedData = useRef(false);

  const fetchPokemonList = () => {
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/pokemon?limit=500",
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
      setPokemon((prevArray) => [...prevArray, response.data]);
    });
  };

  useEffect(() => {
    if (hasFetchedData.current === false) {
      fetchPokemonList();
      hasFetchedData.current = true;
    }
  }, []);

  return (
    <>
      <CardsContainer>
        {getPokemon.map((pokemon: any, index) => (
          <PokemonCard
            title={JSON.parse(pokemon).name}
            image={JSON.parse(pokemon).sprites.front_default}
            types={["fire"]}
            key={index}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default Pokedex;
