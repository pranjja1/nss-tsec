
import React from "react";


const Volunteer = () => {
  return (

    // <div className="form" style={{position:"relative",top:"50%",alignSelf:"center",alignContent:"center",alignItems:"cen"}}>
  <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0" style={{backgroundColor:"#85FFBD",backgroundImage: "linear-gradient(130deg, #85FFBD 46%, #FFFB7D 97%)",width:"1000px",height:"600px",position:"relative",left:"7%"}}>
      <div className="md:w-1/3 max-w-sm">
        <img
          src="./images/environment.png" alt="Sample image" style={{height:"600px",width:"490px",left:"0px",position:"absolute",top:"0px"}}
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
      <h4 style={{color:"#006A4E"}}>Volunteer login</h4>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span style={{color:"#006A4E"}}>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#" style={{color:"#006A4E"}}
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit" style={{backgroundColor:"#006A4E"}}   >
            Login 
          </button>
        </div>
        
      </div>
    </section>
    // </div>
  );
};

export default Volunteer;