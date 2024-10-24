import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {

const navigate=useNavigate();

 const handleUpdateHours = () => {

    navigate('/todo');

  // You can navigate to another page or open a form here

 };



 const handleUpdateGallery = () => {

 navigate('/gallery1');

  // You can navigate to another page or open a form here

 };



 return (

  <div style={styles.container}>

   <div style={styles.profileBox}>

    <h2 style={styles.title}>Welcome, Program Officer!</h2>

    <p style={styles.subtitle}>What would you like to do today?</p>

    <button style={styles.button} onClick={handleUpdateHours}>

     Update Volunteer Hours

    </button>

    <button style={styles.button} onClick={handleUpdateGallery}>

     Update Gallery

    </button>

   </div>

  </div>

 );

};



// Styles for the profile page

const styles = {

 container: {

  display: 'flex',

  justifyContent: 'center',

  alignItems: 'center',

  height: '100vh',

  background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',

 },

 profileBox: {

  backgroundColor: '#fff',

  padding: '40px',

  borderRadius: '10px',

  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',

  maxWidth: '400px',

  width: '100%',

  textAlign: 'center',

 },

 title: {

  fontSize: '24px',

  fontWeight: 'bold',

  marginBottom: '20px',

 },

 subtitle: {

  fontSize: '18px',

  marginBottom: '20px',

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

  marginBottom: '10px',

 },

};



export default ProfilePage;