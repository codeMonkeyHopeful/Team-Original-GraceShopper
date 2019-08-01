import React, { Component, useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { incrementProdLevel } from '../../redux';
import { tsConstructorType } from '@babel/types';

const MainProducts = props => {//make this the class
 
  componentWillMount() {
    if (props.currentProducts.length === 0) {
      console.log('WORKING')
    }
  }
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

const mapDispatch = dispatch => {
  return {
    increment: () => {
      dispatch(incrementProdLevel());
    },
  };
};

const mapState = state => {
  return {
    productLevel: state.productLevel,
    allProducts: state.allProducts,
    topLevelCategories: state.topLevelCategories,
    currentCategories: state.currentCategories,
    currentProducts: state.currentProducts,
  };
};

export default connect(
  mapState,
  mapDispatch
)(MainProducts);
