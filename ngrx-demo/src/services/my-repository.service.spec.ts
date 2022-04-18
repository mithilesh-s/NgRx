import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { UserDeleteAction, UserEnum } from 'src/action/user-action';
import { User } from 'src/model/User';
import { metaReducers, rootReducer } from 'src/reducer';
import { UserReducerState } from 'src/reducer/user-reducer';
import { ApiService } from './api.service';
import { HttpService } from './http.service';
import { MyRepositoryService } from './my-repository.service';

describe('MyRepositoryService', () => {
  let service: MyRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
     
        imports: [
          StoreModule.forRoot(rootReducer,{metaReducers:metaReducers}),
          RouterTestingModule ,
          HttpClientTestingModule
      
      ],
      providers: [provideMockStore({})]
    });
    service = TestBed.inject(MyRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('deleteUser', () => {
    it('should dispatch load todolist action', () => {
      const expectedAction = new UserDeleteAction();
      const store = jasmine.createSpyObj<Store<any>>('store', ['dispatch']);

      const todoListActions = new UserDeleteAction();
      
      todoListActions.payload.id;

      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });


