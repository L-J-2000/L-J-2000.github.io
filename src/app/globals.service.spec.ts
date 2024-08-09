import { TestBed } from '@angular/core/testing';
import { GlobalsService } from './globals.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

describe('GlobalsService', () => {
  let service: GlobalsService;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'portfolio', component: Component },
          { path: 'cv', component: Component },
        ]),
      ],
      providers: [GlobalsService],
    });
    service = TestBed.inject(GlobalsService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('routeShouldWidenMastHead() should return true if route is /portfolio', async () => {
    await router.navigate(['/portfolio']);
    expect(location.path()).toBe('/portfolio');
    expect(service.routeShouldWidenMasthead()).toBeTruthy();
  });

  it('routeShouldSmallenMasthead() should return true if route is /cv', async () => {
    await router.navigate(['/cv']),
      expect(location.path()).toBe('/cv'),
      expect(service.routeShouldSmallenMasthead).toBeTruthy();
  });
});
