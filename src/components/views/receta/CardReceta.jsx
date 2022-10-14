import { Col, Card, Button } from "react-bootstrap";

const CardReceta = () => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src="https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Nombre Receta</Card.Title>
          <Card.Text>Descripcion</Card.Text>
          <hr />
          <Button variant="danger">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
