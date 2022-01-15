import { createGlobalStyle } from "styled-components";
import Main from "./Components/Main";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor.mainBg};
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
