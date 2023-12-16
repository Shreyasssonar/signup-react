import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(/\S+@\S+\.\S+/.test(event.target.value));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsPasswordValid(event.target.value.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setIsConfirmPasswordValid(event.target.value === password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert("Can't submit the form. Please check for errors.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='maindiv'>
      <div className="email-input">
        <label htmlFor="email">Email:</label><br></br>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          style={{ border: isEmailValid ? 'green 1px solid' : 'red 1px solid' }}
        />
      </div>
      <div className="password-input">
        <label htmlFor="password">Password:</label><br></br>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ border: isPasswordValid ? 'green 1px solid' : 'red 1px solid' }}
        /><br></br>
        {!isPasswordValid && <p className="error">Password must be at least 8 characters.</p>}
      </div>
      <div className="confirm-password-input">
        <label htmlFor="confirm-password">Confirm Password:</label><br></br>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ border: isConfirmPasswordValid ? 'green 1px solid' : 'red 1px solid' }}
          
        />
        {!isPasswordValid && <p className="error">Password Do not Match.</p>}

      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
