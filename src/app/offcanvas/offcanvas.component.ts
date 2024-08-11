import { Component } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasContentComponent } from '../offcanvas-content/offcanvas-content.component';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
})
export class OffcanvasComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}
  open() {
    const offCanvasRef = this.offcanvasService.open(OffcanvasContentComponent);
    offCanvasRef.componentInstance.name = 'navbar';
  }
}
