import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";
import * as fromProduct from '../reducer/product-reducer'



const getProductFeatureState =createFeatureSelector<fromProduct.ProductState>('products')

export const getProducts = createSelector(
  getProductFeatureState,
  state => {
    return state.products
  }
);

export const getLoaded = createSelector(
  getProductFeatureState,
  state => {
    return state.loaded
  }
);
