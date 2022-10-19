import { useEffect, useState } from "react";
import { Card, Badge, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { obtenerRecetaAPI } from "../helpers/queries";


const DetalleReceta = () => {
  const {id} = useParams()
  const [nombreReceta, setNombreReceta] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(()=>{
    obtenerRecetaAPI(id).then((respuesta)=>{
      if(respuesta.status === 200){
        setNombreReceta(respuesta.dato.nombreReceta)
        setDescripcion(respuesta.dato.descripcion)
        setImagen(respuesta.dato.imagen)
        setCategoria(respuesta.dato.categoria)
      }else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    })
  })


  return (
    <Container className="my-4 mainSection">
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={4}>
              <img
                src={imagen}
                alt={nombreReceta}
                className="w-100"
              />
            </Col>
            <Col sm={12} md={8}>
              <Card.Title className="mt-1">
                <h3>{nombreReceta}</h3>
              </Card.Title>
              <hr />
              <div className="d-flex flex-column">
                <aside>
                  <Badge bg="success">{categoria}</Badge>
                </aside>
                <aside>
                  <Card.Text>{descripcion}</Card.Text>
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
