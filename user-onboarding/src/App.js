import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import User from './User';
import schema from './formSchema';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...initialFormErrors, [name]: ''}))
      .catch(err => setFormErrors({...initialFormErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: !!formValues.tos
    }

    setUsers(newUser);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  
  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form values={formValues} submit={formSubmit} change={inputChange} disabled={disabled} errors={formErrors} />

      {
        users.map((user, index) => {
          return (
            <User key={index} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
