import React, { useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'ileana@google.com'
    });
    
    const { username, email } = formState;

    const onInputChange = (event) => {
        console.log(event);
    }

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />
    </>
  );
};
