import styled from "styled-components";

const ContainerRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 512px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vh;
    h1 {
      text-align: center;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }
  }

  form {
    border-radius: 10px 10px 10px 10px;
  }
  p {
    text-align: center;
    color: var(--grey-1);
    margin-bottom: 25px;
  }

  @media (min-width: 768px) {
    min-width: 512px;
    max-width: 512px;
  }
`;

export default ContainerRegisterPage;
