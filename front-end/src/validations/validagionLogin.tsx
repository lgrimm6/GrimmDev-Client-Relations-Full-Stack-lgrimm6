import * as yup from "yup";

const schemaFormLogin = yup.object().shape({
  username: yup.string().required("Required field"),
  password: yup.string().required("Required field"),
});

export default schemaFormLogin;
