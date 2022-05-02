import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoDeLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noopener noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["primavera", "verano", "otoño", "invierno"],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h4>Renderizado Elementos</h4>
        <h2>Estaciones del año</h2>
        <ol>
          {this.state.seasons.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ol>
        <h3>Framewors Frontend Javascript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoDeLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
