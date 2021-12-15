import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import User from './User';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: !!formValues.tos
    }

    setUsers(newUser);
  }

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
