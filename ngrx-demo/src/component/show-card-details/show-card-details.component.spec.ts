import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardDetailsComponent } from './show-card-details.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { metaReducers, rootReducer } from 'src/reducer';describe('ShowCardDetailsComponent', () => {
  let component: ShowCardDetailsComponent;
  let fixture: ComponentFixture<ShowCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(rootReducer,{metaReducers:metaReducers}),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
