import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../core/views/home/home.component';
import { ListComponent }   from '../../../components/list/list.component';
import { InfoComponent }     from '../../../components/info/info.component';
import { PageNotFoundComponent } from '../../../components/errors/not-found.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bill/:id',      component: InfoComponent },
  {
    path: 'bills',
    component: ListComponent,
    data: { title: 'Bills List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

import { NavigationComponent } from './navigation.component';
import {NavbarComponent} from '../../../components/navbar/navbar.compontent';
import {FormComponent} from '../../../components/form/form.compontent';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    NavigationComponent,
    NavbarComponent,
    FormComponent,
    HomeComponent,
    ListComponent,
    InfoComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavigationComponent
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})

export class NavigationModule { }