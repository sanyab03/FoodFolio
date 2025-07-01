import React, { useState } from "react";


function Inventory() {
  const [items, setItems] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    expires: "",
    category: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity || !formData.expires || !formData.category) return;
    setItems((prev) => [...prev, formData]);
    setFormData({ name: "", quantity: "", expires: "", category: "" });
  };

  const handleDelete = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Inventory</h1>

      <div className="inventory-table-container">
        {items.length === 0 ? (
          <p className="no-items">No items yet.</p>
        ) : (
          <table className="inventory-table">
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
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td data-label="Name">{item.name}</td>
                  <td data-label="Quantity">{item.quantity}</td>
                  <td data-label="Expiration Date">{item.expires}</td>
                  <td data-label="Category">
                    <span className={`tag ${item.category.toLowerCase()}`}>{item.category}</span>
                  </td>
                  <td data-label="Actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(idx)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="add-form">
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <input
            type="date"
            name="expires"
            value={formData.expires}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Inventory;
