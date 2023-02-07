import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye } from "react-icons/ai";
import { AuthContext } from "../../../contexts/AuthContexts";
import { IContact, IFormUpdateContact } from "../../../contexts/interfaces";
import api from "../../../services";
import formSchemaUpdateContact from "../../../validations/validationUpdateContact";
import Button from "../../Button";
import { IFormUpdate } from "../../Forms/FormRegister/interfaces";
import FormStyled from "../../Forms/style";

const EditContact /* : React.FC<{ contact: IContact }> */ =
  (/* { contact } */) => {
    const { client, setContacts, contacts } = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormUpdateContact>({
      resolver: yupResolver(formSchemaUpdateContact),
    });

    const requestUpdateContact = async (data: IFormUpdateContact) => {
      try {
        const res = await api.patch(``, data);
      } catch (error) {
        console.error(error);
        alert(
          "due to technical issues this option is only availablemaking the request through the backend or contacting the administrator"
        );
      }
    };

    return (
      <>
        <header className="header">
          <h3>Edit Contact</h3>
        </header>
        <FormStyled onSubmit={handleSubmit(requestUpdateContact)}>
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
      </>
    );
  };

export default EditContact;
