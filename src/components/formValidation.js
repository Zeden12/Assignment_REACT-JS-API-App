// HAGUMA KWIZERA Ernest

import React, { useState } from "react";

const FormValidation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrors(['Username and password are required']);
      return;
    }
    // perform form submission logic, e.g. send data to API
  };

  return (
    <div>
      <h2>Form Validation</h2>
      {errors.length > 0 && <p style={{ color: 'red' }}>{errors[0]}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;