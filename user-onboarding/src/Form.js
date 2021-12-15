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
  console.log(errors);
  return (
    <div>
      <div>
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
      </div>

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
    </div>
  )
}