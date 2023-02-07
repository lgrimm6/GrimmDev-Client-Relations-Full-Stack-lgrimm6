import * as yup from "yup";

const formSchemaUpdateContact = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string(),
});

export default formSchemaUpdateContact;
