import React, { useState } from 'react';
import axios from '../../axios-order';
import Router from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

const NewCampground = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handlePriceChange = event => setPrice(event.target.value);
  const handleImageChange = event => setImage(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      price,
      image,
      description,
    };
    const token = localStorage.getItem('token');
    console.log(token);
    axios
      .post('/campgrounds', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        Router.push('/campgrounds');
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Create a New Campground</h1>
        <div style={{ width: '40%', margin: '25px auto' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="name"
                value={name}
                required
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="price"
                value={price}
                required
                onChange={handlePriceChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="image"
                value={image}
                required
                onChange={handleImageChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="description"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCampground;
