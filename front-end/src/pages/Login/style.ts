import styled from "styled-components";

const ContainerLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 512px;

  margin: 20vh auto;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: var(--color-primary);
  }
  form {
    background-color: var(--grey-3);
    padding: 25px;
    border-radius: 10px 10px 0 0;

    h2 {
      text-align: center;
      color: var(--grey-0);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    padding: 25px;
    background-color: var(--grey-3);
    border-radius: 0 0 10px 10px;

    p {
      text-align: center;
      color: var(--grey-1);
      margin-bottom: 25px;
    }
  }

  @media (min-width: 768px) {
    min-width: 512px;
    max-width: 512px;
  }
`;

export default ContainerLoginPage;
