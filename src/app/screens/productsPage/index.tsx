import React from 'react';
import { Route, Switch, useRouteMatch} from "react-router-dom";
 import { Container } from "@mui/material";
import ChoosenProduct from './ChosenProduct';
import Products from './Products';
import { CartItem } from '../../../lib/types/search';

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export function ProductsPage(props: ProductsPageProps) {
    const {onAdd} = props;
    const products = useRouteMatch();
    return <div className='products-page'>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChoosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${products.path}`}>
          <Products onAdd={onAdd}/>
        </Route>
      </Switch>
    </div>
  }
  