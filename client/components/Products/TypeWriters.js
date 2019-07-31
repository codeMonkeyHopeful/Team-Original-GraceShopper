import React, { Component, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

const DataDevices = props => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('/api/categories/level2').then(res => {
      let dataDevices = res.data.filter(
        item => item.pcid2 >= 20 && item.pcid2 <= 29
      );
      const categoriesObj = dataDevices;
      setCategories(() => categoriesObj);
    });
  }, []);
  //console.log(categories);
  return (
    <div>
      <div>
        {categories.map(category => {
          return (
            <div>
              <Link to={`/${category.pcid2}`}>{category.name2}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataDevices;
