import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../assets/css/pokemon.css"

interface Card {
  title: string;
  image: string;
  types: object[];
}

const myCard = (props: Card) => {  
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center" data-aos="zoom-in-up">
      <Card data-bs-theme="dark" className="card-width">
        <Card.Img
          variant="top"
          src={props.image}
          className="img-thumbnail image"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {props.types.map((pokemonType: any, index) => (
            <Button className={"m-1 " + pokemonType.type.name} key={index}>
              {pokemonType.type.name}
            </Button>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default myCard;
