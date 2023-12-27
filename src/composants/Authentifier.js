// Authentifier.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentifier = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!formData.username || !formData.email || !formData.password || !formData.image) {
      alert('Please fill in all fields and choose a profile image.');
      return;
    }

    try {
      // Redirect to the home page regardless of the server response
      navigate('/home');

      // Simulate sending data to a server
      const response = await fetch('https://api.example.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('User registered:', userData);

        // Redirect to the profile page and pass the user data as a prop
        navigate('/profile', { state: { userData } });
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="modal">
      <h2 className="title">Authentication Page</h2>
      
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Profile Image:</label>
          <input type="file" accept="image/*" name="image" onChange={handleChange} />
        </div>
        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Authentifier;
