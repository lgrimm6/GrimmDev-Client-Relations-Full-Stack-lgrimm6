import * as yup from "yup";

const formSchemaAddContact = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  phone: yup.string(),
});

export default formSchemaAddContact;
