import { User } from "src/model/User";

export enum UserEnum{

  USER_LIST_REQUEST = 'user list request',
  USER_LIST_SUCCESS = 'user list success',
  USER_LIST_ERROR = 'user list error',
  USER_DELETE = 'user delete',
  USER_UPDATE = 'user update',
  USER_ADD = 'user add'
}


export class UserListRequestAction {
    readonly type = UserEnum.USER_LIST_REQUEST
  }

  
export class UserListSuccessAction {
    readonly type = UserEnum.USER_LIST_SUCCESS
    constructor(public payload?: { data: User[] }) {}
    }
export class UserListErrorAction{
    readonly type = UserEnum.USER_LIST_ERROR
  }
export class UserDeleteAction{
    readonly type = UserEnum.USER_DELETE
    constructor(public payload?: { id:number }) {}
  }
export class UserUpdateAction{
    readonly type = UserEnum.USER_UPDATE
    constructor(public payload?: {data:User }) {}
  }
export class UserAddAction{
    readonly type = UserEnum.USER_ADD
    constructor(public payload?: {data:User }) {}
  }
  