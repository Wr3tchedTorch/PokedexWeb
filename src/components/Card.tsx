import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  title: string;
  text: string;
  image: string;
}

const myCard = (props: Props) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center">
      <Card data-bs-theme="dark" className="card-width">
        <Card.Img
          variant="top"
          src={props.image}
          className="img-thumbnail image"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">Dar uma olhada</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default myCard;
