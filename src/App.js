import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./components/Component";
import Propiedades from "./components/Props";
import Estado from "./components/States";
import RenderizadoCondicional from "./components/RenderConditional";
import RenderizadoElementos from "./components/RenderElements";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Events";
import Padre from "./components/ComunicationComponent";
import CicloDeVida from "./components/Lifecycle";
import AjaxAPI from "./components/AjaxAPIs";
import HookContador from "./components/HooksCounter";
import HooksScroll from "./components/HooksScroll";
import HooksReloj from "./components/HooksClock";
import HooksAjaxAPI from "./components/HooksAjaxAPIs";
import HooksPersonalizado from "./components/HooksPersonification";
import Referencias from "./components/Referencs";
import Formularios from "./components/Form";
import Estilos from "./components/Style";
import ComponentesEstilizados from "./components/StyledComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <hr />
        {/*TODO: tutorial */}
        <section>
          <Component msg="Segundo Componente con props" />
          <hr />
          <Propiedades
            cadena="Soy una cadena de texto"
            numero={1977}
            booleano={true}
            arreglo={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            objeto={{ nombre: "jorge", apellido: "callejo" }}
            funcion={(num) => num * 2}
            elementoReact={<i>elemento de React </i>}
            componenteReact={
              <Component msg="Soy un componente pasado como Props " />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloDeVida />
          <hr />
          <AjaxAPI />
          <hr />
          <HookContador />
          <hr />
          <HooksScroll />
          <hr />
          <HooksReloj />
          <hr />
          <HooksAjaxAPI />
          <hr />
          <HooksPersonalizado />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
        </section>
      </header>
    </div>
  );
}

export default App;
