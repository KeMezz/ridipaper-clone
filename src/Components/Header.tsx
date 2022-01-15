import { useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  width: 100vw;
  height: 50px;
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

interface iIsFixed {
  isFixed: boolean;
}

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
  useEffect(
    () =>
      scrollY.onChange(() =>
        scrollY.get() > 50 ? setIsFixed(true) : setIsFixed(false)
      ),
    [scrollY]
  );
  return (
    <Wrapper>
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
