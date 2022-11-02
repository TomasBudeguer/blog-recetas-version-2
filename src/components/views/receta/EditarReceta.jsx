import { useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { editarRecetaAPI, obtenerRecetaAPI } from "../../helpers/queries";

const EditarReceta = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerRecetaAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        // cargar los datos de la respuesta en el formulario
        setValue("nombreReceta", respuesta.dato.nombreReceta);
        setValue("descripcion", respuesta.dato.descripcion);
        setValue("imagen", respuesta.dato.imagen);
        setValue("categoria", respuesta.dato.categoria);
        console.log(respuesta);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombreReceta: "",
      descripcion: "",
      imagen: "",
      categoria: "",
    },
  });

  const onSubmit = (receta) => {
    console.log(receta);
    editarRecetaAPI(id, receta).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Receta actualizada",
          "La receta fue actualizada correctamente",
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  };
  return (
    <Container className="my-5 mainSection">
      <h2 className="display-4">Editar Receta</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre de receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lasagna"
            {...register("nombreReceta", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Primer paso..."
            {...register("descripcion", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 10,
                message: "Debe ingresar como minimo 10 caracteres",
              },
              maxLength: {
                value: 150,
                message: "Debe ingresar como maximo 150 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="URL"
            placeholder="Ej: https://images.pexels.com/photos/pexels-photo-4033636.jpeg?cs=tinysrgb&w=1260"
            {...register("imagen", {
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una categoria</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="ensaldas">Ensaladas</option>
            <option value="postres">Postres</option>
            <option value="salado">Salado</option>
            <option value="tortas">Tortas</option>
            <option value="tartas">Tartas</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarReceta;
