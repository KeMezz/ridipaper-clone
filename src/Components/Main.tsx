import styled from "styled-components";
import Header from "./Header";
import landingImage from "../Image/bg-landing.webp";

const MainSection = styled.section`
  width: 100vw;
  height: 900px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${landingImage});
  background-size: cover;
  background-position: center;
`;
const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  padding: 0 40px;
  margin: 0 auto;
  justify-content: center;
  height: 100%;
  color: ${(props) => props.theme.brandWhite};
  h2 {
    font-size: 40px;
    font-weight: 300;
    padding-bottom: 20px;
  }
  h1 {
    text-transform: uppercase;
    font-size: 76px;
    font-weight: 500;
    span {
      font-weight: 900;
    }
  }
  button {
    width: fit-content;
    margin-top: 100px;
    background-color: ${(props) => props.theme.brandBlue.inactive};
    color: ${(props) => props.theme.brandWhite};
    width: 200px;
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

function Main() {
  return (
    <>
      <MainSection>
        <Header />
        <SectionText>
          <h2>세상이 나의 서재가 된다</h2>
          <h1>
            <span>ridi</span>paper
          </h1>
          <button>구매하기</button>
        </SectionText>
      </MainSection>
    </>
  );
}

export default Main;
