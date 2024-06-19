import React, { useEffect, useState } from "react";
import logoLight from "../images/logoLight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  const [first_name, setFirst_name] = useState('');

  useEffect(() => {
    const storedFirstName = localStorage.getItem('first_name');
    if (storedFirstName && storedFirstName !== 'undefined') {
      setFirst_name(storedFirstName);
    }
  }, []);

  //function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('first_name');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('price');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('orderTotal');
    localStorage.removeItem('quantity');
    localStorage.removeItem('userId');
    setFirst_name(''); 
  };

  //rendering different components based on login status
  const renderLoggedIn = (
    <>
      <div className="btn-group dropstart">
        <button style={{ color: "#ffffff", marginRight: "3vw", backgroundColor: '#010101', border: 'none' }} className="btn btn-secondary" type="submit" data-bs-toggle="dropdown" aria-expanded="false">
          {first_name}
        </button>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to='/profile'>User Profile</Link></li>
          <li><Link className="dropdown-item" to='/orderhistory'>Order History</Link></li>
          <hr></hr>
          <li><Link onClick={handleLogout} className="dropdown-item" to='/login'>Logout</Link></li>
        </ul>
      </div>
    </>
  );

  const renderLoggedOut = (
    <Link to='/signin'>
      <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
    </Link>
  );

  //header component
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
            <img
              src={logoLight}
              style={{ height: "80px", width: "160px" }}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            style={{ backgroundColor: "white" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="row">
              <div className="row d-flex" style={{ width: "110vw" }}>
                <div className="col-8 s-form">
                  <form
                    className="d-flex mt-5"
                    role="search"
                    style={{
                      width: "50vw",
                      textAlign: "center",
                      marginLeft: "12vw",
                    }}
                  >
                    <input
                      className="form-control s-bar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-primary customizeButton"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
                <div
                  className="col-2 d-flex align-items-center"
                  style={{ fontSize: "4vh", marginTop: "55px" }}
                >
                  <Link to='/cart'>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#ffffff", marginRight: "3vw" }}
                  />
                  </Link>
                  
                  
                   {first_name ? renderLoggedIn : renderLoggedOut}
                </div>
              </div>
              <div className="row">
                <div className="col linkList">
                  <ul
                    className="navbar-nav mb-2 mb-lg-0 d-flex"
                    style={{ justifyContent: "center", paddingRight: "30vw" }}
                  >
                    <li className="nav-item">
                      <Link className="nav-link links" aria-current="page" to='/clothings'>
                        Clothing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link links" to='/handcrafts'>
                        Handcrafts
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link links" to='/accessories'>Accessories</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="hr-container">
        <hr className='custom-hr' />
      </div>
    </>
  );
}

export default Header;

