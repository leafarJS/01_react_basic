import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  //TODO: Se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.
  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloDeVida extends React.Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa, aun no esta en el DOM");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.temporizador = null;
  }
  //TODO: Se invoca inmediatamente después de que un componente se ha insertado al árbol del DOM. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.
  componentDidMount() {
    //console.log(1, "El documento ya se encuentra en el DOM");
  }
  //TODO: Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede, al igual que componenDidUpdate es un método ideal para hacer peticiones externas.
  componentDidUpdate(prevProps, prevState) {
    //console.log(2, "El estado o las props del componente han cambiado");
    //console.log(prevProps);
    //console.log(prevState);
  }

  tictac = (e) => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = (e) => {
    this.tictac();
    this.setState({ visible: true });
  };

  detener = (e) => {
    clearInterval(this.temporizador);
    this.setState({ visible: false });
  };

  render() {
    //console.log(4, "El componente se redibuja por algun cambio en el DOM");
    return (
      <>
        <h3>Ciclo de vida de los componentes de clases</h3>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
