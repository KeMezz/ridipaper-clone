import styled from "styled-components";

const HeadingText = styled.div`
  text-align: center;
`;
const StrucGrid = styled.div``;
const TextBox = styled.div``;

function Structure() {
  return (
    <>
      <HeadingText>완벽한 독서 경험</HeadingText>
      <StrucGrid>
        <TextBox></TextBox>
        <TextBox></TextBox>
      </StrucGrid>
    </>
  );
}

export default Structure;
