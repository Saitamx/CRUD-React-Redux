const { OCULTAR_ALERTA, MOSTRAR_ALERTA } = require("../types");

// Mostrar alerat
export function mostrarAlerta(alerta) {
  return (dispatch) => {
    dispatch(crearAlerta(alerta));
  };
}
const crearAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});

// ocultar alerta
export function ocultarAlertaAction() {
  return (dispatch) => {
    dispatch(ocultarAlerta());
  };
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
});
