import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CategoryPage from "../category/category.component";

const ShopPage = ({ match }) => {
  console.log("match", match, `${match.path}/:categoryId`);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:categoryId`}
        component={CategoryPage}
      />
    </div>
  );
};

export default ShopPage;
