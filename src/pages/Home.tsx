import Accordion from "../components/Accordion";
import CardsContainer from "../components/CardsContainer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import transition from "../Transition";

const Home = () => {
  return (
    <div>
      <Carousel />
      <p></p>
      <Accordion
        propArray={[
          {
            title: "Introduction to the pokemon world",
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
          },
          {
            title: "About our pokemon",
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
          },
          {
            title: "About our games",
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.`,
          },
        ]}
      />
      <p></p>
      <div className="background-red-black">
        <CardsContainer>
          <Card
            title="Pokemon Showdown"
            text="Pokemon showdown is an online pokemon battle simulator."
            image="https://cdn2.steamgriddb.com/icon_thumb/bdec2d109b0576a60c6587ad2b5bbfd4.png"
          />
          <Card
            title="Pokemon API"
            text="Pokemon API sends all the data needed for creating a complete pokedex!"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png"
          />
          <Card
            title="Pokemon Cards"
            text="The pokemon cards contains usefull information."
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06485517-936a-481b-b86d-1c02bad4305f/dg5ccx9-4a644d34-551b-4b43-8c85-18e349b1f4b5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2NDg1NTE3LTkzNmEtNDgxYi1iODZkLTFjMDJiYWQ0MzA1ZlwvZGc1Y2N4OS00YTY0NGQzNC01NTFiLTRiNDMtOGM4NS0xOGUzNDliMWY0YjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bCkpbZavCsKKJPwjHsSmH_xFI0mTxK8NAkp5CttU7tY"
          />
        </CardsContainer>
      </div>
    </div>
  );
};

export default transition(Home);
