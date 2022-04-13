import {Action} from '../action'
import { ShopingEnum } from "src/action/shoping-action";
import { StoreUtility } from 'src/utils/StoreUtility';
import { ShoppingItem } from 'src/model/shoping-item';


  export interface ShopingReducerState{
      id:string;
      name:string;
      entities:{[id:number]:ShoppingItem}
      ids:number[]
  }

  const initialState: ShopingReducerState= {
      id: "1775935f-36fd-467e-a667-09f95b917f6d",
      name: 'Diet Coke',
      entities:{},
      ids:[]
    }

    export function ShoppingReducer(state =initialState, action: Action):ShopingReducerState {
        switch (action.type) {
          case ShopingEnum.ADD_ITEM:{
            const item = action.payload.data;
            const entity = {[item.id]: item};
            const newEntities = {...state.entities, ...entity};
            const newIds = StoreUtility.filterDuplicateIds([...state.ids, item.id]);
          return {...state, ...{entities: newEntities, ids: newIds}};
          }
          
        
          case ShopingEnum.DELETE_ITEM:{
            const id = action.payload.id;
            const newIds = state.ids.filter(elem => elem !== id);
            const newEntities = StoreUtility.removeKey(state.entities, id);
            return {...state, ...{entities: newEntities, ids: newIds}};
          }
          default:
            return state;
        }
      }


      export const getShopingItems = (state: ShopingReducerState) => state.name;

