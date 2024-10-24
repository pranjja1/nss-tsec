import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

 const [username, setUsername] = useState('');

 const [password, setPassword] = useState('');

 const [errorMessage, setErrorMessage] = useState('');

 const navigate = useNavigate(); // React Router's useNavigate hook



 const handleLogin = (e) => {

  e.preventDefault();



  const presetUsername = 'admin';

  const presetPassword = 'nsstsec24';



  if (username === presetUsername && password === presetPassword) {

   alert('Login successful!');

   navigate('/profile'); // Navigate to profile page on successful login

  } else {

   setErrorMessage('Incorrect username or password');

  }

 };



 return (

  <div style={styles.container}>

   <div style={styles.loginBox}>

    <h2 style={styles.title}>Admin Login</h2>

    <form onSubmit={handleLogin}>

     <label style={styles.label} htmlFor="username">

      Username:

     </label>

     <input

      type="text"

      id="username"

      value={username}

      onChange={(e) => setUsername(e.target.value)}

      style={styles.input}

      required

     />

     <label style={styles.label} htmlFor="password">

      Password:

     </label>

     <input

      type="password"

      id="password"

      value={password}

      onChange={(e) => setPassword(e.target.value)}

      style={styles.input}

      required

     />

     {errorMessage && <p style={styles.error}>{errorMessage}</p>}

     <button type="submit" style={styles.button}>

      Login

     </button>

    </form>

   </div>

  </div>

 );

};



// Styles for the login page

const styles = {

 container: {

  display: 'flex',

  justifyContent: 'center',

  alignItems: 'center',

  height: '100vh',

  background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',

 },

 loginBox: {

  backgroundColor: '#fff',

  padding: '40px',

  borderRadius: '10px',

  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',

  maxWidth: '400px',

  width: '100%',

 },

 title: {

  fontSize: '24px',

  fontWeight: 'bold',

  marginBottom: '20px',

  textAlign: 'center',

 },

 label: {

  display: 'block',

  marginBottom: '8px',

  fontSize: '16px',

 },

 input: {

  width: '100%',

  padding: '10px',

  marginBottom: '20px',

  borderRadius: '5px',

  border: '1px solid #ddd',

  fontSize: '16px',

 },

 button: {

  width: '100%',

  padding: '12px',

  backgroundColor: '#3498db',

  color: '#fff',

  border: 'none',

  borderRadius: '5px',

  cursor: 'pointer',

  fontSize: '16px',

 },

 error: {

  color: 'red',

  textAlign: 'center',

  marginBottom: '10px',

 },

};



export default LoginPage;