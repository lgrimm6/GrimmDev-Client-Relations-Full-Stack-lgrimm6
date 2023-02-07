import { useForm } from "react-hook-form";
import schemaFormLogin from "../../../validations/validagionLogin";
import FormStyled from "../style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContexts";
import Button from "../../Button";
import { AiFillEye } from "react-icons/ai";
import { IFormLogin } from "./interfaces";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<IFormLogin>({ resolver: yupResolver(schemaFormLogin) });
  const { displayPassword, loginRequest } = useContext(AuthContext);

  return (
    <>
      <FormStyled action="submit" onSubmit={handleSubmit(loginRequest)}>
        <h2>Sign In</h2>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            placeholder="Digite nome de usuario *"
            {...register("username")}
            autoFocus
          />
          <span>{errors.username?.message}</span>
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="Digite sua Senha *"
            autoComplete="off"
            {...register("password")}
          />
          <Button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              displayPassword(event)
            }
          >
            <AiFillEye />
          </Button>
          <span>{errors.password?.message}</span>
        </label>
        <Button
          type="submit"
          disabled={!isValid}
          backgroundColor={"var(--color-primary)"}
          hover={"var(--color-primary-focus)"}
        >
          Entrar
        </Button>
      </FormStyled>
    </>
  );
};

export default FormLogin;
