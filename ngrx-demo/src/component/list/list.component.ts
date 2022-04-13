import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/model/product';
import * as productActions from "../../action/product-action"
import * as fromProductReducer from "../../reducer/product-reducer"
import * as fromProduct from "../../effect/product-index"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products$!: Observable<Product[]>;
  constructor(private store: Store<fromProductReducer.ProductState>) {}
 ngOnInit() {
    this.store.dispatch(new productActions.Load());
    this.products$ = this.store.pipe(select(fromProduct.getProducts))
  }
  

}
