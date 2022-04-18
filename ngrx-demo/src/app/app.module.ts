import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from 'src/component/layout/dashboard/dashboard.component';
import { HeaderComponent } from 'src/component/layout/header/header.component';
import { YoutubeLayoutComponent } from 'src/component/layout/youtube-layout/youtube-layout.component';
import { UserComponent } from './container/user/user.component';
import { PostComponent } from './container/post/post.component';
import { MaterialModule } from 'src/module/material/material.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from 'src/component/user-card/user-card.component';
import { UserListComponent } from 'src/component/user-list/user-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer } from 'src/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserUpdateComponent } from 'src/component/user-update/user-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowCardDetailsComponent } from 'src/component/show-card-details/show-card-details.component';
import { PostListComponent } from 'src/component/post-list/post-list.component';
import { PostCardComponent } from 'src/component/post-card/post-card.component';
import { EffectsModule } from '@ngrx/effects';
import { ListComponent } from 'src/component/list/list.component';
import { ProductService } from 'src/services/product.service';
import { ProductEffect } from 'src/effect/product-effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from 'src/serializer/router-serializer';
import { RouterModule } from '@angular/router';








@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubeLayoutComponent,
    UserComponent,
    PostComponent,
    UserCardComponent,
    UserListComponent,
    UserUpdateComponent,
    ShowCardDetailsComponent,
    PostListComponent,
    PostCardComponent,
    ListComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot(rootReducer,{metaReducers:metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ProductEffect]),
    StoreRouterConnectingModule.forRoot({
      serializer:RouterSerializer
    })
   

  ],
  providers: [ProductService,ProductEffect,Store ],
  bootstrap: [AppComponent]
})
export class AppModule { }
