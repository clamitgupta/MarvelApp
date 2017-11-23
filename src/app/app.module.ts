import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

import { HomeComponent } from "./components/home/home.component";
import { HomeService } from "./service/home.service";
import { AppComponent } from "./app/app.component";
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { AppRoutingModule } from "./routing/routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    LazyLoadImagesModule,
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
