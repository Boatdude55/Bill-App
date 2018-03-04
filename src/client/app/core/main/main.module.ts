import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NavigationModule } from '../../features/navigation/navigation.module';
import { RouterModule } from '@angular/router';

/**
 * TODO: Implement Modal component
 * import { ModalComponent } from '../../../components/modal/modal.component';
 */

/**
 * TODO: Implement QuickView module
 * import { QuickViewModule } from '';
 *
 */

import { AppComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }