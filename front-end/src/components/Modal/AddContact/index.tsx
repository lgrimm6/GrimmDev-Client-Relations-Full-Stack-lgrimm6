import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContexts";
import { IAddContact, IContact } from "../../../contexts/interfaces";
import api from "../../../services";
import formSchemaAddContact from "../../../validations/validationAddContact";
import Button from "../../Button";
import FormStyled from "../../Forms/style";

const AddContact = () => {
  const { contacts, setContacts, setIsOpenModalAddContact } =
    useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddContact>({
    resolver: yupResolver(formSchemaAddContact),
  });

  const onSubmitAddContact = async (data: IAddContact) => {
    try {
      const res = await api.post<IContact>("/clients/contact", data);
      setContacts([...contacts!, res.data]);
      setIsOpenModalAddContact(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header className="header">
        <h3>Edit Contact</h3>
      </header>
      <FormStyled onSubmit={handleSubmit(onSubmitAddContact)}>
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
          Add
        </Button>
      </FormStyled>
    </>
  );
};

export default AddContact;
