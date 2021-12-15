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
  }

  const onChange = event => {
    console.log(event)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name
          <input 
            type='text'
            name='name'
            value={values.name}
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

        <button>Submit</button>
      </form>
    </div>
  )
}