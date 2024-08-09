import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, OffcanvasComponent],
      imports: [RouterOutlet],
      providers: [NgbOffcanvas],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Portfolio');
  });
});
