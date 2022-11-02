import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { consultarAPI } from "../helpers/queries";
import CardReceta from "./receta/CardReceta";

const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);

  return (
    <div className="mainSection">
      <Container>
        <h1 className="display-4 text-center">Blog de Recetas</h1>
        <hr />
        <Row>
            {
                recetas.map((receta)=>(<CardReceta key={receta._id} receta={receta} setRecetas={setRecetas}></CardReceta>))
            }
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
