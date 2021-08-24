import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl,addItem }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)( CollectionItem);