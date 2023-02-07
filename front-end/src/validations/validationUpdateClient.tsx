import * as yup from "yup";
let formSchemaUpdateClient = yup.object().shape({
  name: yup.string().nullable(true),
  phone: yup.string().nullable(true),
  email: yup.string().email("Email inválido").nullable(true),
  username: yup.string().nullable(true),
  password: yup
    .string()
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      {
        message:
          "No mínimo 8 caracteres. letras Maisculas e Minusculas, números e ao menos um símbolo.",
        excludeEmptyString: true,
      }
    )
    .nullable(true)
    .default(""),
});

export default formSchemaUpdateClient;
