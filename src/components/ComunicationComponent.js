import React, { Component } from "react";

//one way data binding || enlace de datos unidireccional
export default class Padre extends Component {
  state = {
    contador: 0,
  };
  incrementarContador = (e) => {
    this.setState({ contador: this.state.contador + 1 });
  };
  /* para relaciones que no son padres e hijos , o varios componentes 

Redux: librería externa a React para el manejo del estado.
Context: un API interna de React que provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Esta API la retomaremos cuando veamos el tema de Hooks.
*/
  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <p>
          Contador <b>{this.state.contador}</b>{" "}
        </p>
        <Hijo
          incrementarContador={this.incrementarContador}
          msn="Mensaje pra el hijo N° 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          msn="Mensaje pra el hijo N° 2"
        />
      </>
    );
  }
}

//TODO: componente hijo
function Hijo(props) {
  return (
    <>
      <h3>{props.msn}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
