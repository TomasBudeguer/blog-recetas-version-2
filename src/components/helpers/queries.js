// const URLRecetas = "http://localhost:3004/recetas"; //json-server
const URLRecetas = "http://localhost:4000/apirecetas/recetas";
const URLusuarios = "http://localhost:3004/usuarios";

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URLRecetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const crearRecetaAPI = async (receta) => {
  try {
    const respuesta = await fetch(URLRecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLRecetas}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URLRecetas + "/" + id);
    const recetaBuscada = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return recetaBuscada;
  } catch (error) {
    console.log(error);
  }
};

export const editarRecetaAPI = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(URLRecetas + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URLusuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const consultarUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URLusuarios);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};
