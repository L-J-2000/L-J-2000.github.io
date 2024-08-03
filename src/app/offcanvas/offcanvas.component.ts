import { Component, inject, Input } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasContentComponent } from '../offcanvas-content/offcanvas-content.component';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
})
export class OffcanvasComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}
  open() {
    const offcanvasRef = this.offcanvasService.open(OffcanvasContentComponent);
    offcanvasRef.componentInstance.name = 'navbar';
  }
}
