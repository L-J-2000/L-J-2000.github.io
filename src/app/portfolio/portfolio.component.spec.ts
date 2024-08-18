import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioProjectsComponentComponent } from '../portfolio-projects-component/portfolio-projects-component.component';
import { ProjectDetails } from '../../global-interfaces';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent, PortfolioProjectsComponentComponent],
    });
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add ProjectDetails correctly', () => {
    let projectDetail = {
      id: 0,
      title: 'hello world',
      description: 'test description',
      imageURL: '../../assets/img/AngularPlaceHolder.jpg',
    };
    expect(component.addProjectToList(projectDetail).id).toBe(0);
    expect(component.addProjectToList(projectDetail).title).toBe('hello world');
    expect(component.addProjectToList(projectDetail).description).toBe(
      'test description'
    );
    expect(component.addProjectToList(projectDetail).imageURL).toBe(
      '../../assets/img/AngularPlaceHolder.jpg'
    );
  });
});
