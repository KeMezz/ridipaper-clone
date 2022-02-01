import { createGlobalStyle } from "styled-components";
import Accessory from "./Components/Accessory";
import CoreFeatures from "./Components/CoreFeatures";
import Details from "./Components/Details";
import FontsIntroduction from "./Components/FontsIntroduction";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import SellingPoint from "./Components/SellingPoint";
import Specification from "./Components/Specification";
import Structure from "./Components/Structure";

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
      <CoreFeatures />
      <Structure />
      <Details />
      <FontsIntroduction />
      <Accessory />
      <Specification />
      <Footer />
    </>
  );
}

export default App;
