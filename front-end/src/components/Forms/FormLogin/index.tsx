import { useForm } from "react-hook-form";
import schemaFormLogin from "../../../validations/validagionLogin";
import FormStyled from "../style";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../services";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ resolver: yupResolver(schemaFormLogin) });
  const loginRequest = async (data: any) => {
    try {
      const res = await api.post("", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("client", JSON.stringify(res.data.client));
    } catch (error) {
      localStorage.clear();
      console.error(error);
    }
  };
  return (
    <>
      <FormStyled action="submit" onSubmit={handleSubmit(loginRequest)}>
        <h2></h2>
        <input
          type="text"
          id=""
          placeholder="username"
          {...register("username")}
        />
        <input
          type="text"
          id=""
          placeholder="password"
          {...register("password")}
        />
        <button>login</button>
      </FormStyled>
      <button>Register</button>
    </>
  );
};

export default FormLogin;
