import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Name is required')
    .min(6, 'Name has to be at least 6 characters'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .required('Password is requried')
    .min(6, 'Password has to be at least 6 characters'),
  tos: yup
    .boolean()
    .oneOf([true], 'You must accept terms of service')
})

export default formSchema;