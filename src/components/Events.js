import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  }
  restar(e) {
    console.log("restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h4>Eventos en Componentes de clase ES6</h4>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//TODO: Property initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //TODO: Definir con arrow function
  sumar = (e) => {
    console.log("sumando");
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  };
  restar = (e) => {
    console.log("restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h4>Eventos en Componentes de clase ES7</h4>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}
//TODO: Evento personalizado
function Boton(props) {
  return <button onClick={props.myOnClick}>Btn hecho Componente</button>;
}
// const Boton = (props) => {
//   <button onClick={props.myOnClick}>Btn hecho Componente</button>;
// };
// const Boton = ({ myOnClick }) => {
//   <button onClick={myOnClick}>Btn hecho Componente</button>;
// };

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e);
    //TODO: event SyntheticBaseEvent
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(msg);
  };
  //TODO: Paso de parametros
  render() {
    return (
      <div>
        <h4>Variedad de Eventos</h4>

        <button onClick={(e) => this.handleClick(e, "A la verga")}>
          Saludar
        </button>
        {/*Evento personalizado ERROR COMUN EJX */}
        {/* <Boton onClick={(e) => this.handleClick(e, "A la verga 2")} /> */}
        <Boton myOnClick={(e) => this.handleClick(e, "A la verga 2")} />
      </div>
    );
  }
}
