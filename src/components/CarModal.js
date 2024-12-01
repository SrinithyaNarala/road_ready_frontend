import React from 'react';
import { X, Car, Calendar } from 'lucide-react';
import './CarModal.css';

const CarModal = ({ isOpen, onClose, cars, onBookCar }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <h2>Available Cars</h2>
        <div className="car-list">
          {cars.map((car) => (
            <div key={car.id} className="car-item">
              <div className="car-details">
                <Car size={24} />
                <h3>{car.name}</h3>
                <p>{car.type}</p>
              </div>
              <button className="book-button" onClick={() => onBookCar(car)}>
                <Calendar size={18} />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarModal;
