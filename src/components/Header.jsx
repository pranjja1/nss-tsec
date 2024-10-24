import React from 'react';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  let navigate=useNavigate();
  const routeChange=()=>{
    let path='./POlogin';
    navigate(path)
  }
  const routeChange2=()=>{
    let path2='./USlogin';
    navigate(path2)
  }
 

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" to="#">
      <img src="/images/nss_logo.png?height=40&width=40" alt="NSS TSEC Logo" style={{ height: '50px', width: '89px' }} />
        <span className="sr-only">NSS TSEC</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6" >
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="./about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="./events">
          Events
        </Link>
       

        {/* <Link className="text-sm font-medium hover:underline underline-offset-4" to="./login"> */}
        
        <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"white",color:"blue"}}>
        Login
      </Dropdown.Toggle>


      <Dropdown.Menu>
        <Dropdown.Item href="/po">Program Officer</Dropdown.Item>
        <Dropdown.Item href="/uslogin">User</Dropdown.Item>
        <Dropdown.Item href="/cart">Shop</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        {/* </Link> */}

      </nav>
    </header>
  );
}
