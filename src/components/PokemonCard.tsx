import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  title: string;
  image: string;
  types: string[];
}

function getTypeColor(type: string) {
  switch (type) {
    case "fire":
      return "danger";
    case "water":
      return "primary";
    case "grass":
      return "success";
    default:
      return "warning";
  }
}

const myCard = (props: Props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <Card data-bs-theme="dark" className="card-width">
        <Card.Img
          variant="top"
          src={props.image}
          className="img-thumbnail image"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          {props.types.map((type, index) => (
            <Button variant={getTypeColor(type)} className="m-1" key={index}>
              {type}
            </Button>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default myCard;
