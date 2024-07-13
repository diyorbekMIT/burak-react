import React from 'react';
import { Route, Switch, useRouteMatch} from "react-router-dom";
 import { Container } from "@mui/material";
import ChoosenProduct from './ChosenProduct';
import Products from './Products';

export function ProductsPage() {
    const products = useRouteMatch();
    return <div className='products-page'>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChoosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  }
  