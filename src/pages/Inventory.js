import React, { useState } from 'react';
import Arrow1 from "../assets/arrow1.png"; 

const InventoryPage = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Apples', quantity: 10, expiration: '2024-07-20', category: 'Fruits' },
    { id: 2, name: 'Carrots', quantity: 5, expiration: '2024-07-18', category: 'Vegetables' },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', quantity: '', expiration: '', category: '' });
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = () => {
    setInventory(inventory.map(item => (item.id === editingItem.id ? editingItem : item)));
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const handleAdd = () => {
    if (!newItem.name || !newItem.quantity || !newItem.expiration || !newItem.category) {
      setErrorMessage('All fields are required.');
      return;
    }
    setInventory([...inventory, { ...newItem, id: Date.now() }]);
    setNewItem({ name: '', quantity: '', expiration: '', category: '' });
    setErrorMessage('');
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredInventory = filter ? inventory.filter(item => item.category === filter) : inventory;

  return (
    <div className="inventory-page">
      <h2>Inventory <img id="arrow1" src={Arrow1} className="arrow" /></h2>
      <div className="filter-buttons">
        <button 
          className={filter === '' ? 'active' : ''}
          onClick={() => handleFilter('')}
        >
          All
        </button>
        <button 
          className={filter === 'Fruits' ? 'active' : ''}
          onClick={() => handleFilter('Fruits')}
        >
          Fruits
        </button>
        <button 
          className={filter === 'Vegetables' ? 'active' : ''}
          onClick={() => handleFilter('Vegetables')}
        >
          Vegetables
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Expiration Date</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.expiration}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingItem && (
        <div className="edit-form">
          <h3>Edit Item</h3>
          <input
            type="text"
            value={editingItem.name}
            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
          />
          <input
            type="number"
            value={editingItem.quantity}
            onChange={(e) => setEditingItem({ ...editingItem, quantity: e.target.value })}
          />
          <input
            type="date"
            value={editingItem.expiration}
            onChange={(e) => setEditingItem({ ...editingItem, expiration: e.target.value })}
          />
          <input
            type="text"
            value={editingItem.category}
            onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}

      <div className="add-form">
        <h3>Add New Item</h3>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          type="date"
          placeholder="Expiration Date"
          value={newItem.expiration}
          onChange={(e) => setNewItem({ ...newItem, expiration: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default InventoryPage;
