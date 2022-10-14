import { Button } from "react-bootstrap";
const ItemReceta = () => {
  return (
    <tr>
      <td>1</td>
      <td>Nombre receta</td>
      <td>Descripcion</td>
      <td>URL</td>
      <td>Categoria</td>
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
