import { Component } from '@angular/core';
import { ProjectDetails } from '../../global-interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projectList: ProjectDetails[] = [
    {
      id: 0,
      title: 'hello world',
      description: 'This is my first project',
      imageURL: '../../assets/img/AngularPlaceHolder.jpg',
    },
  ];

  indexOfNextProject = this.projectList.length;

  addProjectToList(projectDetailEntry: ProjectDetails) {
    this.projectList[this.indexOfNextProject] = projectDetailEntry;
  }
}
