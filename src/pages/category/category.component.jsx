import React from 'react'

import './category.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';


const CategoryPage = ({match}) => {
    console.log("category match",match);
    return (
        <div className="category">
            <h2>CATEGORY PAGE</h2>
        </div>
    )
}

export default CategoryPage;
