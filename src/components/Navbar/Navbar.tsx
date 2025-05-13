import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonSubscribe from "../../UI/Buttons/ButtonSubscribe";
import styles from "./Navbar.module.css";
import CustomizedMenus from "../../UI/Buttons/CustomizedMenus";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

import RegistrationForm from "../../UI/RegistrationForm";
import LoginForm from "../../UI/LoginForm";
import AuthenticatedNavbar from "./AuthenticatedNavbar";

const HeaderWrapper = styled.div`
  header {
    background-color: #f7ede8;
    padding: 0px;
    min-height: 1448px;
    max-width: 100%;
    background-image: url("pictures/Header.png");
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    align-items: center;
  }

  .navigation p {
    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    color: #000;
  }

  .menus {
    display: flex;
    gap: 60px;
    max-width: 1160px;
    align-items: baseline;
  }
  .b1 {
    font-family: Montserrat Alternates;
    border: 2px solid #000;
    font-weight: bold;
    border-radius: 8px;
    width: 188px;
    height: 41px;
    background-color: #f7ede8;
  }
  .buttons {
    gap: 20px;
    display: flex;
  }

  .menus span {
    font-weight: 700;
    font-family: Montserrat Alternates;
    font-size: 16px;
  }
  h1 {
    font-family: Montserrat Alternates;
    font-weight: 700;
    font-size: 96px;
    line-height: 100%;
    letter-spacing: -0.04em;
    text-align: center;
    color: #000;
  }
  .last-word {
    color: #cd4631;
  }
  p {
    font-family: Montserrat Alternates;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #4d4d4d;
  }
  .cover2 {
    border-radius: 12px;
    max-width: 373px;
    min-height: 373px;
  }
  .covers {
    display: flex;
    justify-content: center;
    margin-top: 120px;
    overflow: hidden;
    gap: 20px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  z-index: 1001;

  &:hover {
    color: #000;
  }
`;

function Navbar() {
  const { isAuthenticated } = useAuth();
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  if (isAuthenticated) {
    return <AuthenticatedNavbar />;
  }

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  const toggleLogIn = () => {
    setShowLogIn(!showLogIn);
  };

  return (
    <HeaderWrapper>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="/pictures/logo.png"
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="menus">
          <Link to="/podcast-detail" className={styles.navLink}>
            <span>Episodes</span>
          </Link>
          <Link to="/about" className={styles.navLink}>
            <span>About</span>
          </Link>
          <span className={styles.more}>
            More
            <CustomizedMenus />
          </span>
        </div>
        <div className="buttons">
          <button className="b1" onClick={toggleLogIn}>LOG IN</button>
          <ButtonSubscribe onClick={toggleRegistration}>
            REGISTRATION
          </ButtonSubscribe>
        </div>
      </div>
      {showRegistration && (
        <ModalOverlay>
          <div
            style={{ position: "relative", width: "100%", maxWidth: "520px" }}
          >
            <CloseButton onClick={toggleRegistration}>&times;</CloseButton>
            <RegistrationForm />
          </div>
        </ModalOverlay>
      )}
      {showLogIn && (
        <ModalOverlay>
          <div
            style={{ position: "relative", width: "100%", maxWidth: "520px" }}
          >
            <CloseButton onClick={toggleLogIn}>&times;</CloseButton>
            <LoginForm />
          </div>
        </ModalOverlay>
      )}
    </HeaderWrapper>
  );
}

export default Navbar;