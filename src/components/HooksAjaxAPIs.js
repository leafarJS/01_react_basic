import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
export default function HooksAjaxAPI() {
  const [pokemons, setPokemons] = useState([]);
  //
  useEffect(() => {
    const getPokemons = async () => {};
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          // console.log(el);
          fetch(el.url)
            .then((response) => response.json())
            .then((json) => {
              //console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };
              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []);
  return (
    <>
      <h3>Consumo de APIs con Hooks</h3>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el, index) => (
          <Pokemon key={index} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
