import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "true" : "false"}</li>
        <li>{props.arreglo.join("_")}</li>
        <li>{props.objeto.nombre + "-" + props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join("_")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props por defaultProps",
};
Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
