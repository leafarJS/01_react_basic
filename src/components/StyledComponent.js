import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093";
  let mainColorAlpha = "#db709380";
  let colorText = "#8b15df";
  const setTransitionTime = (time) => `all ${time} ease-in-out`;
  const fadeIn = keyframes`
    0%{
      opacity:0;
    }100%{
      opacity:1;
    }
  `;
  const MyH3 = styled.h3`
    padding: 2rem;
    text-aling: center;
    border-botton: 1px solid black;
    font-size;.5rem;
    color:${(props) => props.color};
    color:${({ color }) => color};
    color:${({ color }) => color || "#000"};
    font-style:italic;
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 5s ease-out;

    ${(props) =>
      props.isButton &&
      css`
        margin: 0 auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover{
      background-color: ${mainColorAlpha};
      cursor:pointer;
    }
  `;
  const light = {
    color: "#222",
    bgColor: "#ddd",
  };
  const dark = {
    color: "#ddd",
    bgColor: "#222",
  };
  const Box = styled.div`
    padding: 1rem;
    margin: 1rem auto;
    width: 50%;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;
  const BoxRounded = styled(Box)`
    border-radius: 2rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2{
      font-size:1rem;
      padding:1rem;
      margin:2rem auto;
      background-color: ${mainColor};
      color:${colorText};
      text-transform: Capitalize;
      width:60%;
      border-radius:2rem;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <h2>Styled-Components</h2>
      <MyH3>Esta es una etiqueta h3 estilizada con styled-component</MyH3>
      <MyH3 color="#612afb">
        Esta es una etiqueta h3 estilizada con styled-component
      </MyH3>
      <MyH3 isButton>Etiqueta h3 estilizada como un boton</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy un caja Light</Box>
        <BoxRounded>Soy una caja Light redondeada</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy un caja Dark</Box>
        <BoxRounded>Soy una caja Dark redondeada</BoxRounded>
      </ThemeProvider>
    </>
  );
}
