import { Component } from '@angular/core';
import { GlobalsService } from './globals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public globalsService: GlobalsService, public router: Router) {}
  title = 'Portfolio';
}
