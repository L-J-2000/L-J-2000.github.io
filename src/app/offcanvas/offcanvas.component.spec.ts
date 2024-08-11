import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffcanvasComponent } from './offcanvas.component';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from '../nav/nav.component';
import { OffcanvasContentComponent } from '../offcanvas-content/offcanvas-content.component';

describe('OffcanvasComponent', () => {
  let component: OffcanvasComponent;
  let fixture: ComponentFixture<OffcanvasComponent>;
  let offcanvasComponent: OffcanvasComponent;
  let offcanvasService: NgbOffcanvas;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcanvasComponent, OffcanvasComponent],
      imports: [],
      providers: [
        NgbOffcanvas,
        NgbActiveOffcanvas,
        OffcanvasComponent,
        OffcanvasContentComponent,
      ],
    });
    fixture = TestBed.createComponent(OffcanvasComponent);
    offcanvasService = TestBed.inject(NgbOffcanvas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open', () => {
    offcanvasComponent = new OffcanvasComponent(offcanvasService);
    expect(offcanvasComponent.open()).toBeTrue();
  });
});
