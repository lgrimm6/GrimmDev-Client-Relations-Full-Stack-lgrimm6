import styled from "styled-components";

const ContainerDashboardPage = styled.div`
  height: 100vh;
  padding: 15px;

  header {
    color: var(--color-primary);
    display: flex;
    justify-content: space-between;
  }

  section {
    display: flex;
    height: 15%;
    justify-content: space-around;
    position: relative;
    .containerClient {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      height: 100%;
      width: 50%;
      h3 {
        color: var(--grey-0);
      }
    }
    .editProfile {
      position: absolute;
      right: 0;
    }
  }
  main {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    height: 70%;

    .containerNewContact {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--color-primary);
      .buttonPDF {
        path {
          fill: white;
        }
      }
    }
    ul {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      overflow: auto;
      max-height: 768px;
      height: 50vh;
      border-radius: 5px;
      padding: 15px;
      gap: 15px;
      background-color: var(--grey-3);
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--color-primary-focus);
        border-radius: 5px;
      }

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /*  max-width: 400px; */
        width: 100%;
        min-height: 200px;
        padding: 5px;
        border-radius: 5px;
        color: var(--grey-0);
        background-color: var(--grey-4);
        position: relative;
        &:hover {
          background-color: var(--grey-2);
        }

        .buttonsContact {
          display: flex;
          width: 100%;
          gap: 10px;
        }

        .containerContact {
          display: flex;
          gap: 10px;
          height: 100%;
          .infoContact {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50%;
            h3 {
              width: 100%;
              overflow: hidden;
            }
          }
        }
      }
    }
    /* ul {
      
      align-items: center;

      li {
       
        .li-right {
          display: flex;
          align-items: center;
          gap: 25px;
          position: relative;
          right: 40px;
          
          
        }
      } 
    }*/
  }
  @media (min-width: 728px) {
    width: 70%;
    margin: 0 auto;
  }

  section {
    max-height: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export default ContainerDashboardPage;
