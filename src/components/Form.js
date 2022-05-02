import React, { useState } from "react";

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   };
//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre: </label>
//         <input
//           type="text"
//           name="nombre"
//           id="nombre"
//           defaultValue={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu sabor JS favorito:</p>
//         <input
//           type="radio"
//           name="sabor"
//           id="vanilla"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//           defaultChecked
//         />
//         <label htmlFor="">Vanilla</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="react"
//           value="react"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="">React</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="angular"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="">Angular</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="vue"
//           value="vue"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="">Vue</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="svelte"
//           value="svelte"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="">Svelte</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="polimer"
//           value="polimer"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="">Polimer</label>

//         <p>Elige tu lenguaje de programación favorito</p>
//         <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)}>
//           <option defaultValue="">---</option>
//           <option value="js">Javascript</option>
//           <option value="pt">Phyton</option>
//           <option value="php">PHP</option>
//           <option value="go">Go</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto terminos y condiciones</label>
//         <br />
//         <input
//           type="checkbox"
//           name="terminos"
//           id="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

export default function Formularios() {
  const [form, setForm] = useState([]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          name={form.nombre}
          id="nombre"
          defaultValue={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor JS favorito:</p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="">Vanilla</label>

        <input
          type="radio"
          name="sabor"
          id="react"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="">React</label>

        <input
          type="radio"
          name="sabor"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="">Angular</label>

        <input
          type="radio"
          name="sabor"
          id="vue"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="">Vue</label>

        <input
          type="radio"
          name="sabor"
          id="svelte"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="">Svelte</label>

        <input
          type="radio"
          name="sabor"
          id="polimer"
          value="polimer"
          onChange={handleChange}
        />
        <label htmlFor="">Polimer</label>

        <p>Elige tu lenguaje de programación favorito</p>
        <select name="lenguaje" onChange={handleChange}>
          <option defaultValue="">---</option>
          <option value="js">Javascript</option>
          <option value="pt">Phyton</option>
          <option value="php">PHP</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <br />
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
