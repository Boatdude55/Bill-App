'use strict';

import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Frame } from './frame.service';
@Component({
    templateUrl: './home.template.html',
    animations: [
        trigger('frameState', [
              state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
              })),
              state('active',   style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
              })),
              transition('inactive => active', animate('100ms ease-in')),
              transition('active => inactive', animate('100ms ease-out'))
            ])

        ]
})

export class HomeComponent {
    
     frames = [
       new Frame( "Concerned and Proactive citizens and congressional persons",  ),
       new Frame( "Congress" ),
       new Frame( "White House" )
   ];
   
}