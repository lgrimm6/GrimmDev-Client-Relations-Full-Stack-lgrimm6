import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContexts";
import formSchemaUpdateClient from "../../../validations/validationUpdateClient";
import Button from "../../Button";
import { IFormUpdate } from "../../Forms/FormRegister/interfaces";
import FormStyled from "../../Forms/style";
import { AiFillEye } from "react-icons/ai";
import api from "../../../services";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const { displayPassword, client, setClient, setIsOpenModalEditProfile } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUpdate>({
    resolver: yupResolver(formSchemaUpdateClient),
  });
  const handleUpdateClient = async (data: IFormUpdate) => {
    Object.keys(data).forEach((key: string) => {
      if (data[key as keyof IFormUpdate] === "") {
        delete data[key as keyof IFormUpdate];
      }
    });
    try {
      const res = await api.patch(`clients/${client?.id}`, data);
      setClient(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClient = async (clientId: string) => {
    try {
      await api.delete(`/clients/${clientId}`);
      localStorage.clear();
      setIsOpenModalEditProfile(false);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <header className="header">
        <h3>Edit Profile</h3>
      </header>
      <FormStyled onSubmit={handleSubmit(handleUpdateClient)}>
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
          backgroundColor={"var(--color-primary-negative)"}
          color={"var(--grey-4)"}
          hover={"var(--color-primary-focus)"}
        >
          Update
        </Button>
      </FormStyled>
      <Button
        width={"90%"}
        backgroundColor={"var(--negative)"}
        hover={"var(--color-primary-focus)"}
        onClick={() => handleDeleteClient(client!.id)}
      >
        Delete Account
      </Button>
    </>
  );
};

export default EditProfile;
