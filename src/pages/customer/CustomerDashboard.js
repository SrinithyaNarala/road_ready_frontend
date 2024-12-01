import React, { useState } from 'react';
import VehicleSearch from '../../components/VehicleSearch';
import { Car, Calendar, MapPin, Clock } from 'lucide-react';
import './CustomerDashboard.css';

const CustomerDashboard = () => {
  const [reservations] = useState([
    {
      id: 1,
      vehicleType: 'Sedan',
      vehicleMake: 'Toyota',
      vehicleModel: 'Camry',
      startDate: '2023-06-01',
      endDate: '2023-06-05',
      status: 'Confirmed'
    },
    {
      id: 2,
      vehicleType: 'SUV',
      vehicleMake: 'Honda',
      vehicleModel: 'CR-V',
      startDate: '2023-07-10',
      endDate: '2023-07-15',
      status: 'Pending'
    }
  ]);

const popularDestinations = [
    { name: 'Taj Mahal, Agra', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' },
    { name: 'Gateway of India, Mumbai', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Hawa Mahal, Jaipur', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Golden Temple, Amritsar', image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80' },
  ];

  const featuredCars = [
    { name: 'Tesla Model 3', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Ford Mustang', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'BMW X5', image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Mercedes-Benz S-Class', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { name: 'Audi R8', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' },
    { name: 'Porsche 911', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <Car size={24} />
            <h2>Search Vehicles</h2>
            <p>Find the perfect car for your next trip</p>
            <VehicleSearch />
          </div>
          <div className="dashboard-card">
            <Calendar size={24} />
            <h2>Your Reservations</h2>
            {reservations.length > 0 ? (
              <ul className="reservation-list">
                {reservations.map((reservation) => (
                  <li key={reservation.id} className="reservation-item">
                    <div className="reservation-header">
                      <Car size={18} />
                      <span>{reservation.vehicleType} ({reservation.vehicleMake} {reservation.vehicleModel})</span>
                    </div>
                    <div className="reservation-details">
                      <p><Calendar size={14} /> {reservation.startDate} - {reservation.endDate}</p>
                      <p><Clock size={14} /> Status: {reservation.status}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You have no current reservations.</p>
            )}
          </div>
          <div className="dashboard-card">
            <MapPin size={24} />
            <h2>Popular Destinations</h2>
            <div className="destination-grid">
              {popularDestinations.map((destination, index) => (
                <div key={index} className="destination-item">
                  <img src={destination.image} alt={destination.name} />
                  <p>{destination.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="featured-cars">
          <h2>Featured Cars</h2>
          <div className="car-grid">
            {featuredCars.map((car, index) => (
              <div key={index} className="car-item">
                <img src={car.image} alt={car.name} />
                <p>{car.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;

