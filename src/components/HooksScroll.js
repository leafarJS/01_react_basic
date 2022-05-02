import React, { useState, useEffect } from "react";

export default function HooksScroll(props) {
  const [scrollY, setScrollY] = useState(0);
  //const [name, setName] = useState("jon");

  useEffect(() => {
    //console.log("ejecutando scroll");
    const detectarScrollY = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScrollY);
    return () => {
      window.removeEventListener("scroll", detectarScrollY);
      //console.log("fase de desmontaje");
    };
  }, [scrollY]);

  useEffect(() => {
    //console.log("fase de montaje");
  }, []);

  useEffect(() => {
    //console.log("fase de actualización");
  });

  useEffect(() => {
    return () => {
      //console.log("fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useState | useEffect </h2>
      <p>ScrollY del Navegador {scrollY}px</p>
    </>
  );
}
