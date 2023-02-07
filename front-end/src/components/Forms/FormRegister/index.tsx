import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContexts";
import { AiFillEye } from "react-icons/ai";
import formSchemaRegister from "../../../validations/validationRegister";
import FormStyled from "../style";
import Button from "../../Button";
import { IFormRegister } from "./interfaces";

const FormRegister = () => {
  const { onSubmitFunctionRegister, displayPassword } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormRegister>({
    mode: "onChange",
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <FormStyled onSubmit={handleSubmit(onSubmitFunctionRegister)}>
      <h2>Crie sua conta</h2>
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          id="nome"
          autoComplete="on"
          placeholder="Digite seu nome *"
          {...register("name")}
          autoFocus
        />
        <span>{errors.name?.message}</span>
      </label>

      <label htmlFor="Email">
        Email
        <input
          type="email"
          id="Email"
          placeholder="Digite seu email*"
          autoComplete="off"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
      </label>
      <label htmlFor="Username">
        Username
        <input
          id="Username"
          placeholder="Digite seu username *"
          {...register("username")}
        />
        <span>{errors.username?.message}</span>
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha*"
          autoComplete="off"
          {...register("password")}
        />
        <Button onClick={(event) => displayPassword(event)}>
          <AiFillEye />
        </Button>
        <span>{errors.password?.message}</span>
      </label>

      <label htmlFor="confirmPassword">
        Confirmar senha
        <input
          type="password"
          id="confirmPassword"
          placeholder="Digite sua senha*"
          autoComplete="off"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>
      </label>

      <label htmlFor="Telefone">
        Telefone
        <input
          type="text"
          id="telefone"
          placeholder="Opção de telefone"
          {...register("phone")}
        />
        <span>{errors.phone?.message}</span>
      </label>

      <Button
        type="submit"
        disabled={!isValid}
        backgroundColor={"var(--color-primary)"}
        hover={"var(--grey-2)"}
      >
        Cadastrar
      </Button>
    </FormStyled>
  );
};

export default FormRegister;
