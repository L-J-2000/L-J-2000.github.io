import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import {
  NgbActiveOffcanvas,
  NgbNav,
  NgbOffcanvasRef,
} from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { GlobalsService } from '../globals.service';
import { appConfig } from 'src/routes';
import { inject } from '@angular/core';
describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let mockOffCanvas: NgbActiveOffcanvas;
  let mockOffCanvasRef: NgbOffcanvasRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [NgbNav, RouterLink],
      providers: [
        NgbActiveOffcanvas,
        GlobalsService,
        { provide: NgbOffcanvasRef, useValue: {} },
        appConfig.providers,
      ],
    });
    fixture = TestBed.createComponent(NavComponent);
    mockOffCanvas = TestBed.inject(NgbActiveOffcanvas);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
