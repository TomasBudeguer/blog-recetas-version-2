import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        borrarRecetaAPI(receta._id).then((respuesta) => {
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
      <td>{receta._id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.imagen}</td>
      <td>{receta.categoria}</td>
      <td>
        <Link className="btn btn-success me-2 mb-1" to={`/administrar/editar/${receta._id}`}>Editar</Link>
        <Button variant="danger" className="mb-1" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
