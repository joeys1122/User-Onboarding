import React from "react";

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props;

  const onSubmit = event => {
    event.preventDefault();
    submit();
  }

  const onChange = event => {
    const {name, value, checked, type} = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Username
          <input 
            type='text'
            name='username'
            value={values.username}
            onChange={onChange}
          />
        </label>

        <label>Email
          <input 
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>Password
          <input 
            type='password'
            name='password'
            value={values.password}
            onChange={onChange}
          />
        </label>

        <label>Terms of Service
          <input 
            type='checkbox'
            name='tos'
            checked={values.tos}
            onChange={onChange}
          />
        </label>

        <button disabled={disabled}>Submit</button>
      </form>
      <div>
        <p>{errors.username}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.tos}</p>
      </div>
    </div>
  )
}