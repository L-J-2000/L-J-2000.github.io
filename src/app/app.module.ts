import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { appConfig } from 'src/routes';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { OffcanvasContentComponent } from './offcanvas-content/offcanvas-content.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, OffcanvasComponent, OffcanvasContentComponent],
  imports: [BrowserModule, NgbModule, RouterOutlet],
  providers: [appConfig.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
