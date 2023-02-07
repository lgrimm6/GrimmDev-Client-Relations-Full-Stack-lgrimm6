import * as yup from "yup";
let formSchemaRegister = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email Obrigatório"),
  password: yup
    .string()
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "No mínimo 8 caracteres. letras Maisculas e Minusculas, números e ao menos um símbolo."
    )
    .required("Senha obrigatória"),
  name: yup.string().required("Seu nome por favor"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Errrroooou"),
  phone: yup.string().required("informe um Nº de Telefone?"),
  username: yup.string().required("Nome de usuario"),
});

export default formSchemaRegister;
