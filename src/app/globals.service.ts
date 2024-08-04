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
    if (
      this.router.isActive('/portfolio', {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored',
      }) ||
      this.router.isActive('/cv', {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored',
      })
    ) {
      return true;
    } else {
      return false;
    }
  }
  setMastheadIsWidened(widened: boolean) {
    this.mastheadIsWidened = widened;
  }
  isMastheadWidened() {
    return this.mastheadIsWidened;
  }
}
