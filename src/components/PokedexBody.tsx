import { useEffect, useState } from "react";
import CardsContainer from "../components/CardsContainer";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

interface Props {
  originalList: any;
}

const PokedexBody = ({ originalList }: Props) => {
  const [getPokemonList, setPokemonList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 16;

  useEffect(() => {
    setPokemonList(originalList);
  }, []);

  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = getPokemonList.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearchChanged = (newList: any) => {
    indexOfLastPost = currentPage * postsPerPage;
    indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentPosts = getPokemonList.slice(indexOfFirstPost, indexOfLastPost);
    setPokemonList(newList);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <SearchBar list={originalList} onSearchChanged={handleSearchChanged} />
      {currentPosts ? (
        <CardsContainer>
          {currentPosts.map((pokemon: any, index) => (
            <PokemonCard
              title={JSON.parse(pokemon).name}
              image={JSON.parse(pokemon).sprites.front_default}
              types={JSON.parse(pokemon).types}
              key={index}
            />
          ))}
        </CardsContainer>
      ) : (
        <h2>Loading...</h2>
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={getPokemonList.length}
        paginate={(number: any) => {
          paginate(number);
        }}
      />
    </>
  );
};

export default PokedexBody;
