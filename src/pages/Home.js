import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Calendar, MapPin } from 'lucide-react';
import logoImage from '../images/Logo.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        {/* <img src={logoImage} alt="Road Ready Logo" className="main-logo" /> */}
        <h1 className="home-title">Welcome to RoadReady</h1>
        <p className="home-description">Your journey begins with us - Rent a car and explore the world</p>
        <div className="home-features">
          <div className="feature">
            <Car size={48} />
            <span>Wide Selection of Vehicles</span>
          </div>
          <div className="feature">
            <Calendar size={48} />
            <span>Flexible Rental Periods</span>
          </div>
          <div className="feature">
            <MapPin size={48} />
            <span>Convenient Pickup Locations</span>
          </div>
        </div>
        <div className="home-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

