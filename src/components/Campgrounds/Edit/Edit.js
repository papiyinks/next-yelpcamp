import React, { useState, useEffect } from 'react';
import axios from '../../../axios-order';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Navbar from '../../../components/Navbar/Navbar';

const Edit = props => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handlePriceChange = event => setPrice(event.target.value);
  const handleImageChange = event => setImage(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`/campgrounds/${id}`)
      .then(response => {
        setName(response.data.name);
        setPrice(response.data.price);
        setImage(response.data.image);
        setDescription(response.data.description);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props]);

  const onSubmit = e => {
    e.preventDefault();
    const obj = {
      name: name,
      price: price,
      image: image,
      description: description,
    };
    const token = localStorage.getItem('token');
    axios
      .patch(`/campgrounds/${id}`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        () => Router.push(`/campground/${id}`)
        // props.history.push('/campgrounds/' + props.match.params.id + '/show')
      );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 align="center">Edit {name}</h3>
        <div style={{ width: '40%', margin: '25px auto' }}>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="price"
                className="form-control"
                value={price}
                onChange={handlePriceChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="image"
                className="form-control"
                value={image}
                onChange={handleImageChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                className="form-control"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
