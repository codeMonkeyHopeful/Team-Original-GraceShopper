import React, { Component, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

const MainProducts = props => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('/api/categories/level1').then(res => {
      //console.log('res', res.data);
      const categoriesObj = res.data;
      setCategories(() => categoriesObj);
    });
  }, []);
  // console.log(categories);
  return (
    <div>
      <div>
        {categories.map(category => {
          return (
            <div key={category.name1}>
              <Link to={`/${category.pcid1}`}>{category.name1}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainProducts;
