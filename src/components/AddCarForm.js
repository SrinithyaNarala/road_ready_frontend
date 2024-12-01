import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddCarForm = ({ onAddCar, onCancel }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && type) {
      onAddCar({ name, type });
      setName('');
      setType('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-car-form">
      <div className="form-group">
        <label htmlFor="carName">Car Name:</label>
        <input
          type="text"
          id="carName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter car name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="carType">Car Type:</label>
        <select
          id="carType"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="">Select a type</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="MUV">MUV</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="agent-btn agent-btn-primary">
          Add Car
        </button>
        <button 
          type="button" 
          className="agent-btn agent-btn-danger"
          onClick={onCancel}
        >
          <X size={18} /> Cancel
        </button>
      </div>
    </form>
  );
};

export default AddCarForm;

