import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  cellphone: yup.string(),
  telephone: yup.string(),
  status: yup.string().required(),
  address: yup.string(),
  complement: yup.string(),
  neighborhood: yup.string(),
  city: yup.string(),
  uf: yup.string(),
  zipcode: yup.string().required(),
});
