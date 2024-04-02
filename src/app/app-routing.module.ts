import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruits/home',
    pathMatch: 'full',
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,CommonModule,RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
