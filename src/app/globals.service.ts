import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  constructor(private router: Router) {}
  routeShouldWidenMasthead(): boolean {
    return this.router.isActive('/portfolio', {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
  routeShouldSmallenMasthead(): boolean {
    return this.router.isActive('/cv', {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
