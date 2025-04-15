import React, { useContext } from 'react';
import { ThemeContext } from "../App";

export const Form = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h3>Welcome</h3>
      <section>
        <button>Sign Up</button>
        <button>Login</button>
      </section>
      <br/>
    </div>
  );
};
