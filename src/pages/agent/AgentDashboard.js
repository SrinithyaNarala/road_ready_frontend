import React, { useState } from 'react';
import { Plus, Check, X, Car, Calendar, MapPin, Clock, FileText } from 'lucide-react';
import AddCarForm from '../../components/AddCarForm';
import './AgentDashboard.css';

const AgentDashboard = () => {
  const [pendingReservations, setPendingReservations] = useState([
    {
      id: '1',
      customerName: 'Rahul Sharma',
      vehicleType: 'Sedan',
      vehicleName: 'Honda City',
      startDate: '2023-06-01',
      endDate: '2023-06-05'
    },
    {
      id: '2',
      customerName: 'Priya Patel',
      vehicleType: 'SUV',
      vehicleName: 'Hyundai Creta',
      startDate: '2023-06-10',
      endDate: '2023-06-15'
    }
  ]);

  const [acceptedReservations, setAcceptedReservations] = useState([]);
  const [availableCars, setAvailableCars] = useState([
    { id: '1', name: 'Maruti Suzuki Swift', type: 'Hatchback' },
    { id: '2', name: 'Honda City', type: 'Sedan' },
    { id: '3', name: 'Hyundai Creta', type: 'SUV' },
  ]);
  const [showAddCarForm, setShowAddCarForm] = useState(false);

  const handleAccept = (reservationId) => {
    const reservation = pendingReservations.find(res => res.id === reservationId);
    setAcceptedReservations([...acceptedReservations, reservation]);
    setPendingReservations(pendingReservations.filter(res => res.id !== reservationId));
  };

  const handleReject = (reservationId) => {
    setPendingReservations(pendingReservations.filter(res => res.id !== reservationId));
  };

  const handleAddCar = (newCar) => {
    setAvailableCars([...availableCars, { ...newCar, id: Date.now().toString() }]);
    setShowAddCarForm(false);
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1 className="dashboard-title">Agent Dashboard</h1>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <Car size={24} />
              <h2>Available Cars</h2>
              <p>Manage your fleet of vehicles</p>
              <button className="agent-btn agent-btn-primary add-car-btn" onClick={() => setShowAddCarForm(true)}>
                <Plus size={18} /> Add New Car
              </button>
              {showAddCarForm && (
                <div className="add-car-form-container">
                  <AddCarForm onAddCar={handleAddCar} onCancel={() => setShowAddCarForm(false)} />
                </div>
              )}
              <ul className="agent-car-list">
                {availableCars.map((car) => (
                  <li key={car.id} className="agent-car-item">
                    <Car size={18} className="car-icon" />
                    <div className="car-details">
                      <strong>{car.name}</strong>
                      <span>{car.type}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dashboard-card">
              <FileText size={24} />
              <h2>Pending Reservations</h2>
              <p>Review and manage booking requests</p>
              {pendingReservations.length > 0 ? (
                <ul className="agent-reservation-list">
                  {pendingReservations.map((reservation) => (
                    <li key={reservation.id} className="agent-reservation-item">
                      <div className="reservation-header">
                        <Car size={18} />
                        <span>{reservation.vehicleName} ({reservation.vehicleType})</span>
                      </div>
                      <div className="reservation-details">
                        <p><Calendar size={14} /> {reservation.startDate} - {reservation.endDate}</p>
                        <p><Clock size={14} /> Customer: {reservation.customerName}</p>
                      </div>
                      <div className="agent-reservation-actions">
                        <button onClick={() => handleAccept(reservation.id)} className="agent-btn agent-btn-success">
                          <Check size={18} /> Accept
                        </button>
                        <button onClick={() => handleReject(reservation.id)} className="agent-btn agent-btn-danger">
                          <X size={18} /> Reject
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-data">No pending reservations.</p>
              )}
            </div>

            <div className="dashboard-card">
              <Check size={24} />
              <h2>Accepted Reservations</h2>
              <p>View confirmed bookings</p>
              {acceptedReservations.length > 0 ? (
                <ul className="agent-reservation-list">
                  {acceptedReservations.map((reservation) => (
                    <li key={reservation.id} className="agent-reservation-item">
                      <div className="reservation-header">
                        <Car size={18} />
                        <span>{reservation.vehicleName} ({reservation.vehicleType})</span>
                      </div>
                      <div className="reservation-details">
                        <p><Calendar size={14} /> {reservation.startDate} - {reservation.endDate}</p>
                        <p><Clock size={14} /> Customer: {reservation.customerName}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-data">No accepted reservations.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDashboard;

