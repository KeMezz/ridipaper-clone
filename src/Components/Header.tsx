import { useViewportScroll } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";

interface iIsFixed {
  isFixed: boolean;
}

const Wrapper = styled.header<iIsFixed>`
  width: 100vw;
  height: 50px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${(props) =>
    props.isFixed ? props.theme.bgColor.mainBg : "transparent"};
  box-shadow: ${(props) =>
    props.isFixed ? "0 0 5px rgba(0,0,0,0.2)" : "none"};
`;

const HeaderContainer = styled.div`
  max-width: 1080px;
  height: 100%;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div<iIsFixed>`
  font-size: 22px;
  text-transform: uppercase;
  color: ${(props) =>
    props.isFixed ? props.theme.textColor : props.theme.brandWhite};
  span {
    font-weight: 800;
  }
`;

const BuyBtn = styled.button<iIsFixed>`
  padding: 6px 12px;
  font-weight: 600;
  background-color: transparent;
  border: solid 1px
    ${(props) =>
      props.isFixed ? props.theme.textColor : props.theme.brandWhite};
  border-radius: 4px;
  color: ${(props) =>
    props.isFixed ? props.theme.textColor : props.theme.brandWhite};
  border-radius: 4px;
  cursor: pointer;
`;

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const { scrollY } = useViewportScroll();
  useLayoutEffect(() =>
    scrollY.get() > 50 ? setIsFixed(true) : setIsFixed(false)
  );
  useEffect(
    () =>
      scrollY.onChange(() =>
        scrollY.get() > 50 ? setIsFixed(true) : setIsFixed(false)
      ),
    [scrollY]
  );
  return (
    <Wrapper isFixed={isFixed}>
      <HeaderContainer>
        <Logo isFixed={isFixed}>
          <span>ridi</span>paper
        </Logo>
        <BuyBtn isFixed={isFixed}>구매하기</BuyBtn>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
