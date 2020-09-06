import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions de Redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import { mostrarAlerta, ocultarAlertaAction } from "../actions/aleratActions";

const NuevoProducto = ({ history }) => {
  // state del componente
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  // utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  // Llamamos el action de productoAction
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  // Acceder al state del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta.alerta);

  // Cuando el usuario haga submit
  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // validar formulario
    if (nombre.trim() === "" || precio <= 0) {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(mostrarAlerta(alerta));
      return;
    }

    //  si no hay errores;
    dispatch(ocultarAlertaAction());

    // crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });

    // redireccionar
    history.push("/");
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alerta && <p className={alerta.classes}>{alerta.msg}</p>}
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
                <label className="mt-2">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
                <button
                  type="submit"
                  className="btn btn-primary font-wight-bold text-upptercase d-block w-100 mt-4"
                >
                  Agregar
                </button>
              </div>
            </form>
            {cargando && <p>Cargando...</p>}
            {error && (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un error
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
