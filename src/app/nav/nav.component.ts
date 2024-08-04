import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public globalsService: GlobalsService) {}
  active = 1;
  activeOffCanvas = inject(NgbActiveOffcanvas);
  dismissCanvas(reason: string) {
    this.activeOffCanvas.dismiss(reason);
  }
}
