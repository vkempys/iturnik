import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header.component'
import { MatIconModule } from '@angular/material';
 
@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule {}
