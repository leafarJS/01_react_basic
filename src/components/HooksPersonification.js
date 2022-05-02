import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizado() {
  //console.log(useFetch());
  let url = "https://pokeapi.co/api/v2/pokemon/";
  url = "https://jsonplaceholder.typicode.com/users";
  let { data, isPending, err } = useFetch(url);
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(err)}</mark>
      </h3>
      <div>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </div>
    </>
  );
}
