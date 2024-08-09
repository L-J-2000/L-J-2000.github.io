import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, provideRouter } from '@angular/router';
import { GlobalsService } from './globals.service';
import { routes } from '../routes';

describe('GlobalsService', () => {
  let service: GlobalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [Router],
    });
    service = TestBed.inject(GlobalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "true" for "routeShouldWidenMasthead" with /portfolio'),
    () => {};
});
