'use strict';
/* eslint no-sync: 0 */
//Typescript
import { Component } from '@angular/core';
import {View} from './models/views';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.template.html',
  styleUrls: ['./navbar.style.css'],
  providers: [NavbarComponent]
})

export class NavbarComponent {
  
  menu = [
    new View('main', 'Home', 'home'),
    new View('main', 'Bills & Resolutions', 'bills')
  ];

}