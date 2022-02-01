import { createGlobalStyle } from "styled-components";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SellingPoint from "./Components/SellingPoint";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: ${(props) => props.theme.bgColor.mainBg};
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <SellingPoint />
    </>
  );
}

export default App;
