import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [leverage, setLeverage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleLeverageChange = (e) => {
    setLeverage(e.target.value);
  };

  const updateLeverage = async () => {
    try {
      const response = await fetch('/api/admin/leverage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ leverage }),
      });

      if (response.ok) {
        alert('Leverage updated successfully');
      } else {
        alert('Error updating leverage');
      }
    } catch (error) {
      console.error('Error updating leverage:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="leverage-settings">
        <h3>Manage Leverage Settings</h3>
        <input
          type="number"
          value={leverage}
          onChange={handleLeverageChange}
          min="1"
          max="100"
        />
        <button onClick={updateLeverage}>Update Leverage</button>
      </div>
      <div className="user-activity">
        <h3>Monitor User Activity</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
