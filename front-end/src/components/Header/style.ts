import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #03013e;
  height: 10vh;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    .logo {
      height: 4rem;
      will-change: filter;
      transition: filter 300ms;
      &:hover {
        filter: drop-shadow(0 0 1vh #64edffaa);
      }
    }
    h1 {
      margin: 0 auto;
      color: rgb(95, 255, 255);
      font-size: 28px;
      text-align: center;
      width: 100%;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
    /* background-color: red; */
  }
`;
export default HeaderStyled;
