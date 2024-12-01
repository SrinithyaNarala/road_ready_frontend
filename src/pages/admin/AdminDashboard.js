import React, { useState } from 'react';
import { Users, UserCheck, Car, Search } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Agent' },
  ]);

  const [agents] = useState([
    { id: 1, name: 'Mike Johnson', email: 'mike@example.com', carsManaged: 5 },
    { id: 2, name: 'Sarah Brown', email: 'sarah@example.com', carsManaged: 3 },
  ]);

  const [cars] = useState([
    { id: 1, name: 'Maruti Suzuki Swift', type: 'Hatchback', agent: 'Mike Johnson' },
    { id: 2, name: 'Honda City', type: 'Sedan', agent: 'Sarah Brown' },
    { id: 3, name: 'Hyundai Creta', type: 'SUV', agent: 'Mike Johnson' },
    { id: 4, name: 'Toyota Innova', type: 'MUV', agent: 'Sarah Brown' },
  ]);

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1 className="dashboard-title">Admin Dashboard</h1>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <Users size={24} />
              <h2>All Users</h2>
              <p>Manage registered users</p>
              <ul className="admin-list">
                {users.map((user) => (
                  <li key={user.id} className="admin-list-item">
                    <div className="admin-item-header">
                      <Users size={18} />
                      <span>{user.name}</span>
                    </div>
                    <div className="admin-item-details">
                      <p><Search size={14} /> {user.email}</p>
                      <p><UserCheck size={14} /> Role: {user.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dashboard-card">
              <UserCheck size={24} />
              <h2>Agents</h2>
              <p>View and manage agents</p>
              <ul className="admin-list">
                {agents.map((agent) => (
                  <li key={agent.id} className="admin-list-item">
                    <div className="admin-item-header">
                      <UserCheck size={18} />
                      <span>{agent.name}</span>
                    </div>
                    <div className="admin-item-details">
                      <p><Search size={14} /> {agent.email}</p>
                      <p><Car size={14} /> Cars Managed: {agent.carsManaged}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dashboard-card">
              <Car size={24} />
              <h2>Available Cars</h2>
              <p>View all cars across agents</p>
              <ul className="admin-list">
                {cars.map((car) => (
                  <li key={car.id} className="admin-list-item">
                    <div className="admin-item-header">
                      <Car size={18} />
                      <span>{car.name}</span>
                    </div>
                    <div className="admin-item-details">
                      <p><Search size={14} /> Type: {car.type}</p>
                      <p><UserCheck size={14} /> Agent: {car.agent}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

