import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer } from 'src/reducer';

import { ApiService } from './api.service';
import { HttpService } from './http.service';
import { MyRepositoryService } from './my-repository.service';
import { ProductService } from './product.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        StoreModule.forRoot(rootReducer,{metaReducers:metaReducers}), ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
