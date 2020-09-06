import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";
import { useHistory } from "react-router-dom";

const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // nuevo state de producto
  const [producto, guardarProducto] = useState({
    nombre: "",
    precio: "",
  });

  //  producto a editar
  const productoEditar = useSelector((state) => state.productos.productoEditar);

  // llevar el state automaticamente
  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  // leer datos del formulario
  const onChangeformulario = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  const { nombre, precio } = producto;

  const submitEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Editar Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeformulario}
                />
                <label className="mt-2">Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeformulario}
                />
                <button
                  type="submit"
                  className="btn btn-primary font-wight-bold text-upptercase d-block w-100 mt-4"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
