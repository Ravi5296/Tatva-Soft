import React, { useState, useCallback } from 'react';

function RegisterUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    dob: ''
  });

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        DOB:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterUser;
