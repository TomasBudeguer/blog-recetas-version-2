import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarRecetaAPI, consultarAPI } from "../../helpers/queries";

const ItemReceta = ({ receta, setRecetas }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el producto?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#208454",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarRecetaAPI(receta.id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarAPI().then((respuesta) => {
              setRecetas(respuesta);
            });

            Swal.fire(
              "Receta eliminada!",
              "La receta fue correctamnete eliminada.",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error!",
              "Intente realizar esta operacion mas tarde.",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Button className="btn btn-success me-2 mb-1">Editar</Button>
        <Button variant="danger" className="mb-1" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
