import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './logo.css';
import logoimg from '../../assets/NEW-GOAT222 (1).webp';

const Logo = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Link to="/" >
      <img className="websitelogo" src={logoimg} alt="Website Logo" />
    </Link>
  );
};

export default Logo;
