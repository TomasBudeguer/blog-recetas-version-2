import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemReceta from "./receta/ItemReceta";

const Administrador = () => {
  return (
    <Container className="my-5 mainSection">
      <div className="d-flex justify-content-between align-items-center">
        <aside>
          <h2 className="display-4">Prouctos disponibles</h2>
        </aside>
        <aside>
          <Link className="btn btn-primary" to="/administrar/crear">
            Agregar
          </Link>
        </aside>
      </div>
      <hr />
      <Table striped bordered hover responsive>
        <thead className="bg-success text-white">
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemReceta></ItemReceta>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
