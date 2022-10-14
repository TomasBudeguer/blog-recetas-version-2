import { Button } from "react-bootstrap";
const ItemReceta = ({receta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Button className="btn btn-success me-2 mb-1">Editar</Button>
        <Button variant="danger" className="mb-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
