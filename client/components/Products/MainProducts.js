import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const MainProducts = props => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('/api/products').then(res => {
      console.log('res', res.data);
      const categoriesObj = res.data;
      setCategories(() => categoriesObj);
    });
  }, []);
  console.log(categories);
  return (
    <div>
      <div>
        {categories.map(product => {
          return <img src={product.image_url} />;
        })}
      </div>
    </div>
  );
};

export default MainProducts;
