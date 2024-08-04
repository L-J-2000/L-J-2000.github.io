import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { CvComponent } from './app/cv/cv.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  { path: 'cv', component: CvComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
