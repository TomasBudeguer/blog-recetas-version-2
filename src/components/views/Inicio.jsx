import { Container, Row } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";

const Inicio = () => {
    return (
        <div className="mainSection">
            <Container>
            <h1 className="display-4 text-center">Blog de Recetas</h1>
            <hr />
            <Row>
                <CardReceta></CardReceta>
            </Row>
            </Container>
        </div>
    );
};

export default Inicio;