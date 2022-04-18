import * as fromUser from './user-reducer';
import * as fromPost from './post-reducer';
import * as fromProduct from '../reducer/product-reducer'
import {ActionReducer, ActionReducerMap, createSelector, INIT, MetaReducer} from '@ngrx/store';
import { RouterState } from '@angular/router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { UserEnum } from 'src/action/user-action';
import { environment } from 'src/environments/environment';




export interface RootReducerState {
  users: fromUser.UserReducerState;
  posts: fromPost.PostReducerState;
  products: fromProduct.ProductState
  router:RouterReducerState




     
 
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  users: fromUser.UserReducer,
  posts: fromPost.PostReducer,
  products:fromProduct.ProductReducer,
  router:routerReducer



};

// Including meta reducer in the project

const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);


    return reducer(state, action);
  };
};


// erasing all the data from the current state using meata reducer

const logoutMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action?.type === UserEnum.USER_LOGOUT) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<RootReducerState>[] = environment.production
  ? [logoutMeta]
  : [debugMeta, logoutMeta];

export const getUserState = (state: RootReducerState) => state.users;
export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUserEntities = createSelector(getUserState, fromUser.getEntities);
export const getUsers = createSelector(getUserState, fromUser.getUsers);
export const getUserError = createSelector(getUserState, fromUser.getError);

export const getPostState = (state: RootReducerState) => state.posts;
export const getPOstLoaded = createSelector(getPostState, fromPost.getLoaded);
export const getPostLoading = createSelector(getPostState, fromPost.getLoading);
export const getPostEntities = createSelector(getPostState, fromPost.getEntities);
export const getPosts = createSelector(getPostState, fromPost.getPosts);
export const getPostError = createSelector(getPostState, fromPost.getError);

export const getUserById = (state: RootReducerState, id: number) => {
  const entities = getUserEntities(state);
  return entities[id];
};
export const getPostById = (state: RootReducerState, id: number) => {
  const entities = getPostEntities(state);
  return entities[id];
};
    