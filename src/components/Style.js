import React from "react";
import "./styles.css";
import moduleStyle from "./Style.module.css";
import "./Style.scss";
//
export default function Estilos() {
  let myStyle = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
    backgroundColor: "yellow",
    color: "black",
  };
  return (
    <>
      <section className="estilos">
        <h2>Estilos CSS con React</h2>
        <h3 className="bg-react">Estilos CSS con hoja externa</h3>
        <h3
          className="bg-react"
          style={{ borderRadius: ".25rem", margin: "2rem auto", width: "60%" }}
        >
          Estilos CSS en linea
        </h3>
        <h2 style={myStyle}>Estilos con objeto</h2>
        <h4 className="bg-react">Agregando con normalize.com</h4>
        <code>@import-normalize;</code>
        <h5 className={moduleStyle.error}>Estilos con módulos</h5>
        <h5 className={moduleStyle.success}>Estilos con módulos</h5>
        <p className="bg-sass">Estilos con SASS</p>
      </section>
    </>
  );
}
