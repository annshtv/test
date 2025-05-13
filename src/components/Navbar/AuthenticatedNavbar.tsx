import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import CustomizedMenus from "../../UI/Buttons/CustomizedMenus";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";

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

  .menus span {
    font-weight: 700;
    font-family: Montserrat Alternates;
    font-size: 16px;
  }

  .avatar-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #CD4631;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .avatar-container:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .dropdown-menu {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    z-index: 1000;
    min-width: 180px;
  }

  .dropdown-item {
    padding: 10px 16px;
    display: block;
    text-decoration: none;
    color: #333;
    font-family: Montserrat Alternates;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  .dropdown-item:hover {
    background-color: #f7ede8;
    color: #CD4631;
  }

  .dropdown-divider {
    height: 1px;
    background-color: #eee;
    margin: 8px 0;
  }

  .logout-button {
    color: #CD4631;
    font-weight: bold;
  }
`;

function AuthenticatedNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const getUserInitials = () => {
    if (!user || !user.username) return "U";
    return user.username.charAt(0).toUpperCase();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setDropdownOpen(false);
  };

  const navigateToAccount = () => {
    navigate('/account');
    setDropdownOpen(false);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.avatar-container') && !e.target.closest('.dropdown-menu')) {
      setDropdownOpen(false);
    }
  };

  useState(() => {
    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

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
        <div style={{ position: 'relative' }}>
          <div className="avatar-container" onClick={toggleDropdown}>
            {getUserInitials()}
          </div>
          
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={navigateToAccount}>
                My Account
              </div>
              <div className="dropdown-item">
                My Podcasts
              </div>
              <div className="dropdown-item">
                Settings
              </div>
              <div className="dropdown-divider"></div>
              <div 
                className="dropdown-item logout-button" 
                onClick={handleLogout}
              >
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default AuthenticatedNavbar;