import * as Yup from 'yup';

export const SCHEMA_NAME = Yup.string().matches(/^[A-Z][a-z]{1,20}$/, 'Must be latin letter').required();

export const SCHEMA_SIGN_IN = Yup.object({
  fname:SCHEMA_NAME,
  lname:SCHEMA_NAME,
  email:Yup.string().email('Enter correct email').required(),
  password:Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,36}$/).required(),
  age:Yup.number().min(18).max(125),
})