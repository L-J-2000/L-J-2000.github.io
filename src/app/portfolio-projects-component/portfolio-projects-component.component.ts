import { Component, Input } from '@angular/core';
import { ProjectDetails } from 'src/global-interfaces';

@Component({
  selector: 'app-portfolio-projects-component',
  templateUrl: './portfolio-projects-component.component.html',
  styleUrls: ['./portfolio-projects-component.component.css'],
})
export class PortfolioProjectsComponentComponent {
  @Input({ required: true }) projectDetails!: ProjectDetails[];
}
