import { Post } from "src/model/Post";

export enum PostEnum{
  POST_LIST_REQUEST = 'post list request',
  POST_LIST_SUCCESS = 'post list success',
  POST_LIST_ERROR = 'post list error',
  POST_DELETE = 'post delete',
  POST_UPDATE = 'post update',
  POST_ADD = 'post add'
 
}


export class PostListRequestAction {
    readonly type = PostEnum.POST_LIST_REQUEST;
  }

  
export class PostListSuccessAction {
    readonly type = PostEnum.POST_LIST_SUCCESS;
    constructor(public payload?: { data: Post[] }) {}
    }
export class PostListErrorAction{
    readonly type = PostEnum.POST_LIST_ERROR;
  }
export class PostDeleteAction{
    readonly type = PostEnum.POST_DELETE;
    constructor(public payload?: { id:number }) {}
  }
export class PostUpdateAction{
    readonly type = PostEnum.POST_UPDATE;
    constructor(public payload?: {data:Post }) {}
  }
export class PostAddAction{
    readonly type =PostEnum.POST_ADD;
    constructor(public payload?: {data:Post }) {}
  }