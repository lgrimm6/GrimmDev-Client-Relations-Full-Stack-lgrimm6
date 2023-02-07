import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  color: var(--grey-0);
  background-color: var(--grey-3);
  gap: 1.5rem;
  padding: 25px;
  border-radius: 10px 10px 0 0;
  label {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 10px;
    position: relative;
    input {
      font-size: larger;
      height: 50px;
      border: 2px solid transparent;
      border-radius: 5px;
      color: var(--grey-0);
      background-color: var(--grey-2);
      &:hover {
        border: 2px solid var(--grey-0);
      }
      &::placeholder {
        color: var(--grey-1);
      }
      &:focus {
        border: 2px solid var(--grey-0);
      }
    }
    span {
      color: var(--negative);
    }
    button {
      width: 20px;
      height: 20px;

      background-color: transparent;

      position: absolute;

      right: 5px;
      top: 45px;
      svg {
        display: flex;
        position: absolute;
        top: 0;
        right: -2px;
        width: 24px;
        height: 21px;
        cursor: pointer;
      }
    }
  }
`;

export default FormStyled;
