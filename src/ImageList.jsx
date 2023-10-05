// ImageList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${url}/api/skills`); // Assuming your API route for getting skills is '/api/skills'
        const skills = response.data;
        const imageUrls = skills.map(skill => skill.image);
        setImages(imageUrls);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='imagelist'>
      {images.map((imageUrl, index) => (
       <img key={index} src={`${url}/images/` + imageUrl} alt={`Image ${index}`} />

      ))}
    </div>
  );
};

export default ImageList;
