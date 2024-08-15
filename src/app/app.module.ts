import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { appConfig } from 'src/routes';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { OffcanvasContentComponent } from './offcanvas-content/offcanvas-content.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioProjectsComponentComponent } from './portfolio-projects-component/portfolio-projects-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    OffcanvasComponent,
    OffcanvasContentComponent,
    PortfolioComponent,
    CvComponent,
    PortfolioProjectsComponentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [appConfig.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
