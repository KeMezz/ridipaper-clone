import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  margin: 110px auto;
  max-width: 1200px;
`;
const HeadingTexts = styled(motion.div)`
  padding: 110px 0;
  margin-bottom: 100px;
  line-height: 1.4;
  text-align: center;
  h1 {
    font-size: 48px;
    font-weight: 600;
    padding-bottom: 30px;
  }
  h3 {
    font-size: 20px;
    color: #888;
    b {
      font-weight: 600;
    }
  }
`;
const Features = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 200px;
`;
const Feature = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 100px; */
  .feature___heading_image {
    width: 600px;
    border-radius: 10px;
    &.right {
      order: 2;
    }
  }
`;
const FeatureText = styled(motion.div)`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  gap: 30px;
  .feature___desc_image {
    width: fit-content;
  }
  h1 {
    font-size: 48px;
    font-weight: 600;
  }
  h3 {
    font-size: 20px;
    color: #888;
    font-weight: 300;
    b {
      font-weight: 500;
    }
  }
`;

const HeroText = styled.h1`
  margin: 220px 0;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
`;

const htVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariants: Variants = {
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

function SellingPoint() {
  return (
    <Container>
      <HeadingTexts
        variants={htVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h1 variants={textVariants}>
          가볍게, 컴팩트하게
          <br />
          어디서나 독서에 빠지다
        </motion.h1>
        <motion.h3 variants={textVariants}>
          출근길 지하철, 여행 떠나는 비행기 안, 잠들기 전 침대 위
          <br />
          어디서든 책을 읽고 싶은 순간 <b>RIDIPAPER</b>를 꺼내보세요.
          <br />
          내가 있는 모든 곳이 독서하기 가장 좋은 곳이 됩니다.
        </motion.h3>
      </HeadingTexts>
      <Features>
        <Feature
          variants={htVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.img
            variants={textVariants}
            className="feature___heading_image"
            src="https://paper.ridibooks.com/static/dd7adcda16cc1c336c494cb99afe6503/6f021/1.jpg"
            alt="리디페이퍼로 책을 읽는 여성"
            loading="lazy"
          />
          <FeatureText variants={textVariants}>
            <img
              className="feature___desc_image"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS41IDIwLjVDMzUuMjIzOSAyMC41IDM1IDIwLjcyMzkgMzUgMjFWMjkuNUgzNlYyMUMzNiAyMC43MjM5IDM1Ljc3NjEgMjAuNSAzNS41IDIwLjVaTTM1LjUgMzkuNUMzNS4yMjM5IDM5LjUgMzUgMzkuMjc2MSAzNSAzOVYzMC41SDM2VjM5QzM2IDM5LjI3NjEgMzUuNzc2MSAzOS41IDM1LjUgMzkuNVoiIGZpbGw9IiM3MDgwOEYiLz4KPHBhdGggZD0iTTE5LjE3MjkgMjUuOTAzM1YyNy43MTQ4SDE5LjA3MDNDMTguMjA5IDI3LjcxNDggMTcuNTAwMyAyNy45MjIyIDE2Ljk0NDMgMjguMzM2OUMxNi4zOTI5IDI4Ljc0NzEgMTYuMDUzNCAyOS4zMTkgMTUuOTI1OCAzMC4wNTI3QzE2LjQ0NTMgMjkuNTQyMyAxNy4xMDE2IDI5LjI4NzEgMTcuODk0NSAyOS4yODcxQzE4Ljc1NTkgMjkuMjg3MSAxOS40NDE3IDI5LjYwMTYgMTkuOTUyMSAzMC4yMzA1QzIwLjQ2MjYgMzAuODU5NCAyMC43MTc4IDMxLjY4NDIgMjAuNzE3OCAzMi43MDUxQzIwLjcxNzggMzMuMzM4NSAyMC41Njc0IDMzLjkxOTYgMjAuMjY2NiAzNC40NDgyQzE5Ljk3MDQgMzQuOTc2OSAxOS41NTM0IDM1LjM5MTYgMTkuMDE1NiAzNS42OTI0QzE4LjQ4MjQgMzUuOTg4NiAxNy44OSAzNi4xMzY3IDE3LjIzODMgMzYuMTM2N0MxNi41MzE5IDM2LjEzNjcgMTUuOTAwNyAzNS45NzcyIDE1LjM0NDcgMzUuNjU4MkMxNC43ODg3IDM1LjMzNDYgMTQuMzU1OCAzNC44NzQzIDE0LjA0NTkgMzQuMjc3M0MxMy43MzYgMzMuNjgwMyAxMy41NzY1IDMyLjk5MjIgMTMuNTY3NCAzMi4yMTI5VjMxLjI5QzEzLjU2NzQgMzAuMjY0NiAxMy43ODYxIDI5LjM0NDEgMTQuMjIzNiAyOC41MjgzQzE0LjY2NTcgMjcuNzA4IDE1LjI5NDYgMjcuMDY1NCAxNi4xMTA0IDI2LjYwMDZDMTYuOTI2MSAyNi4xMzU3IDE3LjgzMDcgMjUuOTAzMyAxOC44MjQyIDI1LjkwMzNIMTkuMTcyOVpNMTcuMDk0NyAzMS4wNTA4QzE2Ljc4OTQgMzEuMDUwOCAxNi41MzQyIDMxLjEyMTQgMTYuMzI5MSAzMS4yNjI3QzE2LjEyNCAzMS40MDQgMTUuOTcxNCAzMS41NzcxIDE1Ljg3MTEgMzEuNzgyMlYzMi40NzI3QzE1Ljg3MTEgMzMuNzMwNSAxNi4zMDYzIDM0LjM1OTQgMTcuMTc2OCAzNC4zNTk0QzE3LjUyNzcgMzQuMzU5NCAxNy44MTkzIDM0LjIwMjEgMTguMDUxOCAzMy44ODc3QzE4LjI4ODcgMzMuNTczMiAxOC40MDcyIDMzLjE3OSAxOC40MDcyIDMyLjcwNTFDMTguNDA3MiAzMi4yMTc0IDE4LjI4NjUgMzEuODIxIDE4LjA0NDkgMzEuNTE1NkMxNy44MDc5IDMxLjIwNTcgMTcuNDkxMiAzMS4wNTA4IDE3LjA5NDcgMzEuMDUwOFpNMjIuMjcwMyAyOS4xNjQxTDIxLjI1ODYgMjguNjE3MkMyMS42MzY4IDI3Ljk2MDkgMjEuODMwNSAyNy4zMTg0IDIxLjgzOTYgMjYuNjg5NVYyNS41SDIzLjUyMTNWMjYuNjE0M0MyMy41MjEzIDI3LjAzODEgMjMuMzk4MiAyNy40OTE1IDIzLjE1MjEgMjcuOTc0NkMyMi45MTA2IDI4LjQ1MzEgMjIuNjE2NyAyOC44NDk2IDIyLjI3MDMgMjkuMTY0MVpNMjUuMTE0OCAyOS4xNjQxTDI0LjEwMzEgMjguNjE3MkMyNC40ODE0IDI3Ljk2MDkgMjQuNjc1MSAyNy4zMTg0IDI0LjY4NDIgMjYuNjg5NVYyNS41SDI2LjM2NThWMjYuNjE0M0MyNi4zNjU4IDI3LjAzODEgMjYuMjQyOCAyNy40OTE1IDI1Ljk5NjcgMjcuOTc0NkMyNS43NTUxIDI4LjQ1MzEgMjUuNDYxMiAyOC44NDk2IDI1LjExNDggMjkuMTY0MVoiIGZpbGw9IiM3MDgwOEYiLz4KPHJlY3QgeD0iMSIgeT0iNSIgd2lkdGg9IjM3IiBoZWlnaHQ9IjUwIiByeD0iMiIgc3Ryb2tlPSIjNzA4MDhGIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iNC41IiB5PSI4LjUiIHdpZHRoPSIyOSIgaGVpZ2h0PSI0MyIgcng9IjAuNSIgc3Ryb2tlPSIjNzA4MDhGIi8+Cjwvc3ZnPgo="
              alt="리디페이퍼의 6인치 화면 사이즈"
              loading="lazy"
            />
            <h1>
              천 페이지가 넘는
              <br />
              책도 얇고 가볍게
            </h1>
            <h3>
              <b>한 손에 쏙</b> 들어오는 사이즈. <b>타월 한 장</b>만큼
              <br />
              가벼운 무게.
              <br />
              덕분에 부담 없이 휴대하고 어디서든 가볍게
              <br />
              책을 읽을 수 있어요.
            </h3>
          </FeatureText>
        </Feature>
        <Feature
          variants={htVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.video
            variants={textVariants}
            className="feature___heading_image right"
            src="https://paper.ridibooks.com/static/2-0c735b80acd3ee12fcc2f8ac043b4209.mp4"
            loop
            muted
            playsInline
            autoPlay
          />
          <FeatureText variants={textVariants}>
            <img
              className="feature___desc_image"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA2MCA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgNjIuOTk5OVYzOS41MDNDMSAzOC4yMTczIDEuNDk1MjUgMzYuOTgxIDIuMzgyODkgMzYuMDUwOUwxMS43NTUyIDI2LjIzMDRDMTIuMDU0MSAyNS45MTczIDEyLjQ0NjQgMjUuNzA5NiAxMi44NzMzIDI1LjYzODRMMjEuMjE1NiAyNC4yNDhMMTguOTk5NyAzOS43NDhDMjMuOTU5MSA1MS4yNzAzIDE4LjE5MTggNTYuNDAyNyAxNC40OTQ1IDU2LjU5OTFDMTQuMjAxOCA1Ni42MTQ2IDEzLjk1MTYgNTYuODQzMiAxMy45NTE2IDU3LjEzNjNWNjIuOTk5OSIgc3Ryb2tlPSIjNzA4MDhGIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iNTAiIHk9IjUxIiB3aWR0aD0iMzciIGhlaWdodD0iNTAiIHJ4PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDUwIDUxKSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzcwODA4RiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjQ2LjUiIHk9IjQ3LjUiIHdpZHRoPSIyOSIgaGVpZ2h0PSI0MyIgcng9IjAuNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCA0Ni41IDQ3LjUpIiBzdHJva2U9IiM3MDgwOEYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAyNy41TDE1IDM1QzE1IDM1LjI3NjEgMTUuMjIzOSAzNS41IDE1LjUgMzUuNUMxNS43NzYxIDM1LjUgMTYgMzUuMjc2MSAxNiAzNVYyNy41VjI2LjVIMTVWMjcuNVpNMTUgMjQuNVYxN0MxNSAxNi43MjM5IDE1LjIyMzkgMTYuNSAxNS41IDE2LjVDMTUuNzc2MSAxNi41IDE2IDE2LjcyMzkgMTYgMTdMMTYgMjQuNVYyNS41SDE1VjI0LjVaIiBmaWxsPSIjNzA4MDhGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIgMTJIMjJWMTNINDJWMTJaTTQyIDE2SDIyVjE3SDQyVjE2Wk0yMiAyMEg0MlYyMUgyMlYyMFpNNDIgMjRIMjJWMjVINDJWMjRaTTIyIDI4SDQyVjI5SDIyVjI4Wk00MiAzMkgyMlYzM0g0MlYzMlpNMjIgMzZINDJWMzdIMjJWMzZaTTMyIDQwSDIyVjQxSDMyVjQwWiIgZmlsbD0iIzcwODA4RiIvPgo8cGF0aCBkPSJNMTcuNzgwNCAzNC42OTUzQzE2LjI4MDQgMzQuNjk1MyAxNC4wMjUxIDM2LjEwMjYgMTEuNDQ3NiAzNy41NjU1QzkuNzgwMTYgMzguNTExOSA4LjM0NiA0MC4zOTkzIDguOTY3MTggNDIuMjEzMkwxMS4zODc1IDQ5LjI4MDdDMTEuNzQzMiA1MC4zMTkzIDEzLjExMDYgNTAuNDg2MiAxMy40MzE0IDQ5LjQzNjNDMTQuMDE1OSA0Ny41MjM2IDEzLjI1MDEgNDUuNjgwNCAxMy45MzExIDQ0LjA4MTVDMTQuNzM5IDQyLjE4NDggMjAuMDY5OSA0MC4wMTk4IDIwLjYyMDYgMzcuODUzNEMyMS4yMTM5IDM1LjUxOTggMTkuMjgwNCAzNC42OTUzIDE3Ljc4MDQgMzQuNjk1M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03LjY5OTk1IDM3LjUxMjlDNy4xNDc2NyAzNy41MTI5IDYuNjk5OTUgMzcuOTYwNiA2LjY5OTk1IDM4LjUxMjlDNi42OTk5NSAzOS4wNjUxIDcuMTQ3NjcgMzkuNTEyOSA3LjY5OTk1IDM5LjUxMjlWMzcuNTEyOVpNMTEuNDQ3NiAzNy41NjU1TDExLjk0MTIgMzguNDM1MkwxMS40NDc2IDM3LjU2NTVaTTIwLjYyMDYgMzcuODUzNEwxOS42NTE1IDM3LjYwN0wyMC42MjA2IDM3Ljg1MzRaTTEzLjkzMTEgNDQuMDgxNUwxNC44NTEyIDQ0LjQ3MzRMMTMuOTMxMSA0NC4wODE1Wk0xMy40MzE0IDQ5LjQzNjNMMTQuMzg3OCA0OS43Mjg1TDEzLjQzMTQgNDkuNDM2M1pNMTEuNDIzNyA1MS4yMDcyQzExLjEwNzQgNTEuNjU5OSAxMS4yMTc5IDUyLjI4MzMgMTEuNjcwNiA1Mi41OTk3QzEyLjEyMzMgNTIuOTE2IDEyLjc0NjggNTIuODA1NCAxMy4wNjMxIDUyLjM1MjdMMTEuNDIzNyA1MS4yMDcyWk03LjY5OTk1IDM5LjUxMjlDOS4xMzcyOSAzOS41MTI5IDEwLjUzNzUgMzkuMjMxOCAxMS45NDEyIDM4LjQzNTJMMTAuOTU0IDM2LjY5NThDOS45MDEyNiAzNy4yOTMzIDguODUzNTcgMzcuNTEyOSA3LjY5OTk1IDM3LjUxMjlWMzkuNTEyOVpNMTEuOTQxMiAzOC40MzUyQzEzLjI1NzQgMzcuNjg4MiAxNC40MjI2IDM2Ljk5NTYgMTUuNDYzOSAzNi40NzY5QzE2LjUzMzMgMzUuOTQ0MyAxNy4yODYxIDM1LjY5NTMgMTcuNzgwNCAzNS42OTUzVjMzLjY5NTNDMTYuNzc0NiAzMy42OTUzIDE1LjY0OTggMzQuMTUgMTQuNTcyMiAzNC42ODY3QzEzLjQ2NjUgMzUuMjM3NCAxMi4yMTUzIDM1Ljk3OTkgMTAuOTU0IDM2LjY5NThMMTEuOTQxMiAzOC40MzUyWk0xNy43ODA0IDM1LjY5NTNDMTguMzg2NSAzNS42OTUzIDE4Ljk4NjggMzUuODY4NCAxOS4zNDQ5IDM2LjE2NzFDMTkuNTA5NiAzNi4zMDQ1IDE5LjYyMTEgMzYuNDY1IDE5LjY4IDM2LjY2MkMxOS43NCAzNi44NjI3IDE5Ljc2NCAzNy4xNjQyIDE5LjY1MTUgMzcuNjA3TDIxLjU4OTggMzguMDk5OEMyMS43NzM5IDM3LjM3NTggMjEuNzc4NyAzNi42OTkxIDIxLjU5NjEgMzYuMDg4OUMyMS40MTI1IDM1LjQ3NSAyMS4wNTgxIDM0Ljk5MTggMjAuNjI2MSAzNC42MzE0QzE5Ljc5MDcgMzMuOTM0NSAxOC42NzQzIDMzLjY5NTMgMTcuNzgwNCAzMy42OTUzVjM1LjY5NTNaTTE5LjY1MTUgMzcuNjA3QzE5LjU4OTggMzcuODQ5NiAxOS4zNDM5IDM4LjIyMzggMTguNzgzMyAzOC43MzQ1QzE4LjI0NzUgMzkuMjIyNCAxNy41NTQ3IDM5LjcyMTYgMTYuNzk5OCA0MC4yNDg3QzE2LjA2OCA0MC43NTk3IDE1LjI2OCA0MS4zMDM0IDE0LjYxMDUgNDEuODM1NkMxMy45ODE3IDQyLjM0NDcgMTMuMzE4MyA0Mi45Njg1IDEzLjAxMTEgNDMuNjg5NkwxNC44NTEyIDQ0LjQ3MzRDMTQuOTQ3OSA0NC4yNDYyIDE1LjI1MzggNDMuODg4MSAxNS44NjkgNDMuMzkwMUMxNi40NTU0IDQyLjkxNTMgMTcuMTc0MSA0Mi40MjY2IDE3Ljk0NDggNDEuODg4NUMxOC42OTI0IDQxLjM2NjUgMTkuNDg2MSA0MC43OTk2IDIwLjEzIDQwLjIxMzFDMjAuNzQ5MSAzOS42NDkyIDIxLjM3NjEgMzguOTQwNCAyMS41ODk4IDM4LjA5OThMMTkuNjUxNSAzNy42MDdaTTEzLjAxMTEgNDMuNjg5NkMxMi41Njk5IDQ0LjcyNTYgMTIuNjEzNiA0NS44MDkzIDEyLjY0NTggNDYuNjc4MUMxMi42ODAyIDQ3LjYwOTcgMTIuNzA5NyA0OC4zNzYxIDEyLjQ3NTEgNDkuMTQ0TDE0LjM4NzggNDkuNzI4NUMxNC43Mzc2IDQ4LjU4MzcgMTQuNjc2NSA0Ny40NzIxIDE0LjY0NDQgNDYuNjA0M0MxNC42MSA0NS42NzM3IDE0LjYxMTQgNDUuMDM2MyAxNC44NTEyIDQ0LjQ3MzRMMTMuMDExMSA0My42ODk2Wk0xMi40NzUxIDQ5LjE0NEMxMi4xOTIxIDUwLjA3MDIgMTEuOTMwMyA1MC40ODIyIDExLjQyMzcgNTEuMjA3MkwxMy4wNjMxIDUyLjM1MjdDMTMuNjMwNCA1MS41NDA5IDE0LjAxOTQgNTAuOTM0MiAxNC4zODc4IDQ5LjcyODVMMTIuNDc1MSA0OS4xNDRaIiBmaWxsPSIjNzA4MDhGIi8+Cjwvc3ZnPgo="
              alt="한 손으로 들기 편한 리디페이퍼"
              loading="lazy"
            />
            <h1>
              어느 손이든
              <br />한 손으로 편하게
            </h1>
            <h3>
              들고 있는 손에 맞춰 알아서 <b>화면이 회전</b>하고
              <br />
              버튼만 누르면 책장이 넘어가니까 한결 편하게
              <br />
              읽을 수 있답니다.
            </h3>
          </FeatureText>
        </Feature>
        <Feature
          variants={htVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.img
            variants={textVariants}
            className="feature___heading_image"
            src="https://paper.ridibooks.com/static/633270daa141fab640f105b68218e77f/0b41e/3.webp"
            loading="lazy"
            alt="리디페이퍼의 블루투스 연결 기능을 사용하는 여성"
          />
          <FeatureText variants={textVariants}>
            <img
              className="feature___desc_image"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjkiIHN0cm9rZT0iIzcwODA4RiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDAuOTA5MyAyMi4yNzgyTDMyLjYzMTEgMTRIMzAuNjMxMVYyNy40MzE2TDIxLjQxNDIgMTguMjE0N0wyMCAxOS42Mjg5TDMwLjM2OTQgMjkuOTk4M0wyMCA0MC4zNjc3TDIxLjQxNDIgNDEuNzgxOUwzMC42MzExIDMyLjU2NVY0NkgzMi42MzExTDQwLjkxMzIgMzcuNzE3OUw0MC41MDQgMzcuMzA4N0w0MC41MDYxIDM3LjMwNjZMMzMuMTk3OCAyOS45OTgzTDQwLjUwNjEgMjIuNjlMNDAuNTAxOCAyMi42ODU3TDQwLjkwOTMgMjIuMjc4MlpNMzIuNjMxMSA0My4xNzE2TDM4LjA4NjkgMzcuNzE1OEwzMi42MzExIDMyLjI2VjQzLjE3MTZaTTMyLjYzMTEgMjcuNzM2NkwzOC4wODUyIDIyLjI4MjVMMzIuNjMxMSAxNi44Mjg0VjI3LjczNjZaIiBmaWxsPSIjNzA4MDhGIi8+Cjwvc3ZnPgo="
              alt="블루투스 로고"
              loading="lazy"
            />
            <h1>
              이제 이야기를
              <br />
              들어보세요
            </h1>
            <h3>
              일상에 지친 눈을 감고 온전히 이야기에만
              <br />
              빠져보세요. <b>블루투스</b>와 <b>듣기(TTS)</b> 기능으로
              <br />
              책을 보는 방법이 다양해집니다.
            </h3>
          </FeatureText>
        </Feature>
        <Feature
          variants={htVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.img
            variants={textVariants}
            className="feature___heading_image right"
            src="https://paper.ridibooks.com/static/e4de17f9d7d5898a088d5c8b47d029c5/0b41e/4.webp"
            loading="lazy"
            alt="케이스를 장착한 리디페이퍼를 가방에 담는 장면"
          />
          <FeatureText variants={textVariants}>
            <img
              className="feature___desc_image"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS41IDE2LjVDMzUuMjIzOSAxNi41IDM1IDE2LjcyMzkgMzUgMTdWMjUuNUgzNlYxN0MzNiAxNi43MjM5IDM1Ljc3NjEgMTYuNSAzNS41IDE2LjVaTTM1LjUgMzUuNUMzNS4yMjM5IDM1LjUgMzUgMzUuMjc2MSAzNSAzNVYyNi41SDM2VjM1QzM2IDM1LjI3NjEgMzUuNzc2MSAzNS41IDM1LjUgMzUuNVoiIGZpbGw9IiM3MDgwOEYiLz4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjM3IiBoZWlnaHQ9IjUwIiByeD0iMiIgc3Ryb2tlPSIjNzA4MDhGIiBzdHJva2Utd2lkdGg9IjIiLz4KPG1hc2sgaWQ9InBhdGgtMy1pbnNpZGUtMSIgZmlsbD0id2hpdGUiPgo8cGF0aCBkPSJNMCAzLjEyMjIxQzAgMS4wOTgyOSAxLjk2MzAzIC0wLjM0NDkxNiAzLjg5NDgyIDAuMjU4NzY5TDI5Ljg5NDggOC4zODM3N0MzMS4xNDczIDguNzc1MTUgMzIgOS45MzUwNSAzMiAxMS4yNDcyVjU2Ljk2MTFDMzIgNTguOTg1IDMwLjAzNyA2MC40MjgyIDI4LjEwNTIgNTkuODI0NUwyLjEwNTE3IDUxLjY5OTVDMC44NTI3NDcgNTEuMzA4MSAwIDUwLjE0ODIgMCA0OC44MzYxVjMuMTIyMjFaIi8+CjwvbWFzaz4KPHBhdGggZD0iTTAgMy4xMjIyMUMwIDEuMDk4MjkgMS45NjMwMyAtMC4zNDQ5MTYgMy44OTQ4MiAwLjI1ODc2OUwyOS44OTQ4IDguMzgzNzdDMzEuMTQ3MyA4Ljc3NTE1IDMyIDkuOTM1MDUgMzIgMTEuMjQ3MlY1Ni45NjExQzMyIDU4Ljk4NSAzMC4wMzcgNjAuNDI4MiAyOC4xMDUyIDU5LjgyNDVMMi4xMDUxNyA1MS42OTk1QzAuODUyNzQ3IDUxLjMwODEgMCA1MC4xNDgyIDAgNDguODM2MVYzLjEyMjIxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIuMTA1MTcgNTEuNjk5NUwxLjUwODYyIDUzLjYwODVMMi4xMDUxNyA1MS42OTk1Wk0yOS44OTQ4IDguMzgzNzdMMjkuMjk4MyAxMC4yOTI3TDI5Ljg5NDggOC4zODM3N1pNMy4yOTgyNyAyLjE2NzczTDI5LjI5ODMgMTAuMjkyN0wzMC40OTE0IDYuNDc0ODFMNC40OTEzNyAtMS42NTAxOUwzLjI5ODI3IDIuMTY3NzNaTTMwIDExLjI0NzJWNTYuOTYxMUgzNFYxMS4yNDcySDMwWk0yOC43MDE3IDU3LjkxNTVMMi43MDE3MiA0OS43OTA1TDEuNTA4NjIgNTMuNjA4NUwyNy41MDg2IDYxLjczMzVMMjguNzAxNyA1Ny45MTU1Wk0yIDQ4LjgzNjFWMy4xMjIyMUgtMlY0OC44MzYxSDJaTTIuNzAxNzIgNDkuNzkwNUMyLjI4NDI1IDQ5LjY2MDEgMiA0OS4yNzM0IDIgNDguODM2MUgtMkMtMiA1MS4wMjMgLTAuNTc4NzU0IDUyLjk1NjIgMS41MDg2MiA1My42MDg1TDIuNzAxNzIgNDkuNzkwNVpNMzAgNTYuOTYxMUMzMCA1Ny42MzU3IDI5LjM0NTcgNTguMTE2OCAyOC43MDE3IDU3LjkxNTVMMjcuNTA4NiA2MS43MzM1QzMwLjcyODMgNjIuNzM5NiAzNCA2MC4zMzQzIDM0IDU2Ljk2MTFIMzBaTTI5LjI5ODMgMTAuMjkyN0MyOS43MTU3IDEwLjQyMzIgMzAgMTAuODA5OCAzMCAxMS4yNDcySDM0QzM0IDkuMDYwMjkgMzIuNTc4OCA3LjEyNzEyIDMwLjQ5MTQgNi40NzQ4MUwyOS4yOTgzIDEwLjI5MjdaTTQuNDkxMzcgLTEuNjUwMTlDMS4yNzE3MiAtMi42NTYzMyAtMiAtMC4yNTA5OTIgLTIgMy4xMjIyMUgyQzIgMi40NDc1NyAyLjY1NDM0IDEuOTY2NSAzLjI5ODI3IDIuMTY3NzNMNC40OTEzNyAtMS42NTAxOVoiIGZpbGw9IiM3MDgwOEYiIG1hc2s9InVybCgjcGF0aC0zLWluc2lkZS0xKSIvPgo8L3N2Zz4K"
              alt="리디북스 케이스"
              loading="lazy"
            />
            <h1>
              언제나 책과
              <br />
              함께 해야 한다면
            </h1>
            <h3>
              글라스 파이버 소재를 사용해 더욱 단단해진
              <br />
              <b>하드 플립 케이스</b>가 RIDIPAPER를 철벽
              <br />
              보호해드릴게요.
            </h3>
          </FeatureText>
        </Feature>
      </Features>
      <HeroText>책과 가장 가까운, 그러나 책 그 이상</HeroText>
    </Container>
  );
}

export default SellingPoint;
