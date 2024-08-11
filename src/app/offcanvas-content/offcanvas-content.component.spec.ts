import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffcanvasContentComponent } from './offcanvas-content.component';
import { NgbActiveOffcanvas, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from '../nav/nav.component';
import { RouterLink } from '@angular/router';
import { appConfig } from 'src/routes';

describe('OffcanvasContentComponent', () => {
  let component: OffcanvasContentComponent;
  let fixture: ComponentFixture<OffcanvasContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [NgbNavModule, RouterLink],
      providers: [NgbActiveOffcanvas, appConfig.providers, NavComponent],
    });
    fixture = TestBed.createComponent(OffcanvasContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
