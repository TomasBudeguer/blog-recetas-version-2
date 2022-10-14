import { Card, Badge, Row, Col, Container } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container className="my-4 mainSection">
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={4}>
              <img
                src="https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="receta"
                className="w-100"
              />
            </Col>
            <Col sm={12} md={8}>
              <Card.Title className="mt-1">
                <h3>Nombre Receta</h3>
              </Card.Title>
              <div className="d-flex flex-column">
                <aside>
                  <Badge bg="success">Categoria</Badge>
                </aside>
                <aside>
                  <Card.Text>Descripcion</Card.Text>
                </aside>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
