import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
