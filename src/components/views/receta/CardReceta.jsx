import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = ({receta}) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={receta.imagen} />
        <Card.Body>
          <div className="d-flex justify-content-between">
            <aside>
            <Card.Title className="text-center">{receta.nombreReceta}</Card.Title>    
            </aside>
            <aside>
            <Badge bg="success">{receta.categoria}</Badge>
            </aside>
          </div>     
          <Card.Text>Descripcion: {receta.descripcion}</Card.Text>
          <hr />
          <Link className="btn btn-success" to={`/detalle-receta/${receta.id}`}>Ver más</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardReceta;
