import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    password: '',
    location: '',
    city: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some(val => val.trim() === '');
    if (isEmpty) {
      setMessage({ text: 'Please fill in all fields.', type: 'error' });
      return;
    }

    setMessage({ text: 'Donation submitted successfully!', type: 'success' });
    setShowSuccess(true);

    setFormData({
      name: '',
      amount: '',
      password: '',
      location: '',
      city: ''
    });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  useEffect(() => {
    const map = L.map("map").setView([28.6139, 77.209], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Draggable marker for manual location
    const marker = L.marker([28.6139, 77.209], { draggable: true }).addTo(map);

    marker.on("dragend", function (event) {
      const latlng = event.target.getLatLng();

      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`)
        .then((response) => response.json())
        .then((data) => {
          setFormData((prevData) => ({
            ...prevData,
            location: data.display_name || '',
            city: data.address.city || data.address.town || data.address.village || ''
          }));
        });
    });
 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;


        const currentLocationIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });
        

        const currentMarker = L.marker([latitude, longitude], {
          icon: currentLocationIcon,
        }).addTo(map);

        currentMarker.bindPopup("📍 You are here").openPopup();

        map.setView([latitude, longitude], 13);
      });
    }

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="donation-body">
      <div className="head-description">
        <h1>
          Donate Food with <span className="site-name">fOODfOLIO</span>
        </h1>
        <p>
          "Food donation is not just about filling empty stomachs; it's about nourishing hope, <br />
          feeding compassion, and cultivating a brighter future for all."
        </p>
      </div>

      <div className="main-container">
        {/* Donation Form */}
        <div className="donateform-container">
          <h1>Make a Donation</h1>
          <form onSubmit={handleSubmit}>
            <div className="name-id">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="amount">
              <input
                type="number"
                name="amount"
                placeholder="Amount (in ₹)"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                placeholder="Secure Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="location">
              <input
                type="text"
                name="location"
                placeholder="Street/Address"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="city">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="donate-btn">Donate</button>
          </form>

          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}
        </div>

        {/* Map Section */}
        <div className="map-container" id="map" style={{ width: "50%", height: "510px" }}></div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="modal-success">
          🎉 Thank you for your donation!
        </div>
      )}
    </div>
  );
};

export default DonationPage;
