import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import landingImage from "../Image/bg-landing.webp";

const MainSection = styled.section`
  width: 100vw;
  height: 900px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${landingImage});
  background-size: cover;
  background-position: center;
`;
const SectionText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  padding: 0 40px;
  margin: 0 auto;
  height: calc(100% - 50px);
  justify-content: flex-end;
  padding-bottom: 230px;
  color: ${(props) => props.theme.brandWhite};
  h2 {
    font-size: 40px;
    font-weight: 200;
    padding-bottom: 20px;
  }
  h1 {
    text-transform: uppercase;
    font-size: 76px;
    font-weight: 500;
    b {
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

const stVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

export const textVariants: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};

function Main() {
  return (
    <>
      <MainSection>
        <SectionText variants={stVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>세상이 나의 서재가 된다</motion.h2>
          <motion.h1 variants={textVariants}>
            <b>ridi</b>paper
          </motion.h1>
          <motion.button variants={textVariants}>구매하기</motion.button>
        </SectionText>
      </MainSection>
    </>
  );
}

export default Main;
