import { createSelector } from "@ngrx/store";
import { Action } from "src/action";
import { PostEnum } from "src/action/post-action";
import { Post } from "src/model/Post";
import { StoreUtility } from "src/utils/StoreUtility";

export interface PostReducerState {
    loading: boolean;
    loaded: boolean;
    error:boolean;
    entities:{[id:number]:Post}
    ids:number[]
  }
  const initialState: PostReducerState = {
    loaded: false,
    loading: false,
    error:false,
    entities:{},
    ids:[]
};


export function PostReducer(state = initialState, action: Action): PostReducerState {
    switch (action.type) {
      case PostEnum.POST_LIST_REQUEST: {
        return {...state, loading: true};
      }
      case PostEnum.POST_LIST_SUCCESS: {
        const posts = action.payload.data;
        const obj = StoreUtility.normalize(posts);
        const newEntities = {...state.entities, ...obj};
        const ids = posts.map((user:any) => user.id);
        const newIds = StoreUtility.filterDuplicateIds([...state.ids, ...ids]);
        return {
          ...state, ...{
            loaded: true,
            loading: false, error: false,
            entities: newEntities, ids: newIds
          }
        };
      }
      
      case PostEnum.POST_LIST_ERROR: {
        return {...state, error: true,loading:false};
      }
      case PostEnum.POST_DELETE: {
        const id = action.payload.id;
        const newIds = state.ids.filter(elem => elem !== id);
        const newEntities = StoreUtility.removeKey(state.entities, id);
        return {...state, ...{entities: newEntities, ids: newIds}};
      }
      case PostEnum.POST_UPDATE: {
        const post = action.payload.data;
        const entity = {[post.id]: post};
        const updatedEntities = {...state.entities, ...entity};
        return {...state, ...{entities: updatedEntities}};
      }
      case PostEnum.POST_ADD: {
        const post = action.payload.data;
        const entity = {[post.id]: post};
        const newEntities = {...state.entities, ...entity};
        const newIds = StoreUtility.filterDuplicateIds([...state.ids, post.id]);
      return {...state, ...{entities: newEntities, ids: newIds}};
      }

      default: {
        return state;
      }
    }


    
}
export const getLoading = (state: PostReducerState) => state.loading;
export const getLoaded = (state: PostReducerState) => state.loaded;
export const getEntities = (state: PostReducerState) => state.entities;
export const getIds = (state: PostReducerState) => state.ids;
export const getPosts= createSelector(getEntities,
  (entities) => StoreUtility.unNormalized(entities));
export const getError = (state: PostReducerState) => state.error;


