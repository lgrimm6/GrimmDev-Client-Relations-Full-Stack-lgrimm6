import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FormLogin from "../../components/Forms/FormLogin";
import ContainerLoginPage from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <ContainerLoginPage className="containerLoginPage">
      <h1>Client Relations</h1>
      <FormLogin></FormLogin>
      <div>
        <p>Ainda não possui uma conta ?</p>
        <Button
          onClick={() => navigate("/register")}
          backgroundColor={"var(--grey-1)"}
          hover={"var(--grey-2)"}
        >
          Cadastre-se
        </Button>
      </div>
    </ContainerLoginPage>
  );
};

export default LoginPage;
