import styled from "styled-components";

const Container = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 40px;
`;

const Boxes = styled.div`
  display: flex;
  height: 100vh;
`;
const TextBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  padding-left: 60px;
  h2 {
    font-size: 40px;
    font-weight: 600;
    padding-bottom: 30px;
  }
  h3 {
    font-size: 22px;
    color: #888;
  }
`;
const ProductBox = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  z-index: 0;
  figure {
    position: relative;
    width: 100%;
    .paperbook_image {
      width: inherit;
    }
    .ridipaper_image {
      /* width: 490px; */
    }
    .text_image {
      position: absolute;
      left: 80px;
      top: 70px;
      margin: auto;
      width: 400px;
    }
  }
`;

function CoreFeatures() {
  return (
    <>
      <Container>
        <Boxes>
          <TextBox>
            <h2>
              독서에 최적화된
              <br />
              전자잉크 디스플레이
            </h2>
            <h3>
              종이책을 보던 느낌 그대로.
              <br />
              햇빛 반사도, 블루라이트도 없으니
              <br />
              오래 읽어도 눈이 피로하지 않아요.
            </h3>
          </TextBox>
          <ProductBox>
            <figure>
              <img
                className="paperbook_image"
                src="https://paper.ridibooks.com/static/fa8227a8cb607b2309dd23f7ca53197c/0d9ae/book.png"
                alt=""
              />
              <img
                className="text_image"
                src="https://paper.ridibooks.com/static/25ab479c50058695bf5faefacd5ba7ac/4db86/text-transparent.png"
                alt=""
              />
            </figure>
            {/* <img
            className="ridipaper_image"
              src="https://paper.ridibooks.com/static/a69a6bd6164a4f2669a6f6acb8f2d8ee/a3e76/device-bright.webp"
              alt=""
            /> */}
          </ProductBox>
        </Boxes>
        <Boxes>
          <TextBox>
            <h2>
              다양한 부가 기능을
              <br />퀵 버튼 하나로
            </h2>
            <h3>
              독서를 멈출 필요가 없어요.
              <br />
              와이파이부터 터치 잠금까지
              <br />퀵 버튼 하나로 조절할 수 있습니다.
            </h3>
          </TextBox>
          <ProductBox></ProductBox>
        </Boxes>
      </Container>
    </>
  );
}

export default CoreFeatures;
