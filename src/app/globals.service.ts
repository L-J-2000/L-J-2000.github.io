import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  constructor(public router: Router) {}
  private mastheadIsWidened = false;
  currentUrl?: string = '';
  routeShouldWidenMasthead(): boolean {
    return this.router.isActive('/portfolio', {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
  routeShouldSmallenMasthead() {
    return this.router.isActive('/cv', {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
  setMastheadIsWidened(widened: boolean) {
    this.mastheadIsWidened = widened;
  }
  isMastheadWidened() {
    return this.mastheadIsWidened;
  }
}
