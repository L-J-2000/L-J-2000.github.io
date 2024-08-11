import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffcanvasComponent } from './offcanvas.component';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasContentComponent } from '../offcanvas-content/offcanvas-content.component';

describe('OffcanvasComponent', () => {
  let component: OffcanvasComponent;
  let fixture: ComponentFixture<OffcanvasComponent>;
  let offcanvasService: NgbOffcanvas;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcanvasComponent],
      imports: [],
      providers: [NgbOffcanvas, NgbActiveOffcanvas],
    });
    fixture = TestBed.createComponent(OffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    offcanvasService = TestBed.inject(NgbOffcanvas);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open', () => {
    expect(offcanvasService.open(OffcanvasContentComponent)).toBeTruthy();
  });
});
