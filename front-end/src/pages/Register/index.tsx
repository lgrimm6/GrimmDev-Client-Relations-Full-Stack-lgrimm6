import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FormRegister from "../../components/Forms/FormRegister";
import ContainerRegisterPage from "./style";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <ContainerRegisterPage>
      <header>
        <h1>Client Relations</h1>
        <Button
          backgroundColor={"var(--grey-3)"}
          hover={"var(--grey-2)"}
          onClick={() => navigate("/", { replace: true })}
        >
          Voltar
        </Button>
      </header>
      <FormRegister></FormRegister>
    </ContainerRegisterPage>
  );
};
export default RegisterPage;
