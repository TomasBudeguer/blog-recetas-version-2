import { Button, Form, Container } from "react-bootstrap";

const EditarReceta = () => {
    return (
        <Container className="my-5">
      <h2 className="display-4">Editar Receta</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre de receta*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Lasagna" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripcion*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Primer paso..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="URL"
            placeholder="Ej: https://images.pexels.com/photos/pexels-photo-4033636.jpeg?cs=tinysrgb&w=1260"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
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
        </Form.Group>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
    );
};

export default EditarReceta;