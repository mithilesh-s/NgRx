import {Action} from '../action'
import {UserEnum } from "src/action/user-action";
import { User } from "src/model/User";
import { StoreUtility } from 'src/utils/StoreUtility';
import { createSelector } from '@ngrx/store';

export interface UserReducerState {
    loading: boolean;
    loaded: boolean;
    error:boolean;
    entities:{[id:number]:User}
    ids:number[]
  }
  
  const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    error:false,
    entities:{},
    ids:[]
};
  
  export function UserReducer(state = initialState, action: Action): UserReducerState {
    switch (action.type) {
      case UserEnum.USER_LIST_REQUEST: {
        return {...state, loading: true};
      }
      case UserEnum.USER_LIST_SUCCESS: {
        const users = action.payload.data;
        const obj = StoreUtility.normalize(users);
        const newEntities = {...state.entities, ...obj};
        const ids = users.map((user:any) => user.id);
        const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
        return {
          ...state, ...{
            loaded: true,
            loading: false, error: false,
            entities: newEntities, ids: newIds
          }
        };
      }
      
      case UserEnum.USER_LIST_ERROR: {
        return {...state, error: true,loading:false};
      }
      case UserEnum.USER_DELETE: {
        const id = action.payload.id;
        const newIds = state.ids.filter(elem => elem !== id);
        const newEntities = StoreUtility.removeKey(state.entities, id);
        return {...state, ...{entities: newEntities, ids: newIds}};
      }
      case UserEnum.USER_UPDATE: {
        const user = action.payload.data;
        const entity = {[user.id]: user};
        const updatedEntities = {...state.entities, ...entity};
        return {...state, ...{entities: updatedEntities}};
      }
      case UserEnum.USER_ADD: {
        const user = action.payload.data;
        const entity = {[user.id]: user};
        const newEntities = {...state.entities, ...entity};
        const newIds = StoreUtility.filterDuplicateIds([...state.ids, user.id]);
      return {...state, ...{entities: newEntities, ids: newIds}};
      }

      default: {
        return state;
      }
    }


    
}
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getEntities = (state: UserReducerState) => state.entities;
export const getIds = (state: UserReducerState) => state.ids;
export const getUsers = createSelector(getEntities,
  (entities) => StoreUtility.unNormalized(entities));
export const getError = (state: UserReducerState) => state.error;