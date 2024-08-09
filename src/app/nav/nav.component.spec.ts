import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { NgbActiveOffcanvas, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { GlobalsService } from '../globals.service';
import { appConfig } from 'src/routes';
describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [NgbNav, RouterLink],
      providers: [NgbActiveOffcanvas, GlobalsService, appConfig.providers],
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
