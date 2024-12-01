import React, { useState } from 'react';
import { Search, Calendar, MapPin, Car } from 'lucide-react';
import './VehicleSearch.css';

const VehicleSearch = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ location, startDate, endDate, vehicleType });
  };

  return (
    <form onSubmit={handleSearch} className="vehicle-search-form">
      <div className="form-group">
        <label htmlFor="location">
          <MapPin size={18} />
          <span>Location</span>
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter pickup location"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">
          <Calendar size={18} />
          <span>Start Date</span>
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">
          <Calendar size={18} />
          <span>End Date</span>
        </label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="vehicleType">
          <Car size={18} />
          <span>Vehicle Type</span>
        </label>
        <select
          id="vehicleType"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">Any</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="hatchback">Hatchback</option>
          <option value="muv">MUV</option>
        </select>
      </div>
      <button type="submit" className="search-button">
        <Search size={18} />
        Search
      </button>
    </form>
  );
};

export default VehicleSearch;
