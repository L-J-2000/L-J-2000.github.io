import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectsComponentComponent } from './portfolio-projects-component.component';

describe('PortfolioProjectsComponentComponent', () => {
  let component: PortfolioProjectsComponentComponent;
  let fixture: ComponentFixture<PortfolioProjectsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioProjectsComponentComponent]
    });
    fixture = TestBed.createComponent(PortfolioProjectsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
