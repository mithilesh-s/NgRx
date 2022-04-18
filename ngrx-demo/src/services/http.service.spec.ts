import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MyRepositoryService } from './my-repository.service';
import { ProductService } from './product.service';
import { StoreModule } from '@ngrx/store';
import { rootReducer ,metaReducers} from 'src/reducer';



describe('HttpService', () => {
  let service: HttpService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, StoreModule.forRoot(rootReducer,{metaReducers:metaReducers}), ],
      providers:[HttpService,MyRepositoryService,ProductService]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
