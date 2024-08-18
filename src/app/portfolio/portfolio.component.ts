import { Component } from '@angular/core';
import { ProjectDetails } from '../../global-interfaces';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projectList: ProjectDetails[];
  indexOfNextProject = 0;
  constructor() {
    this.projectList = [
      {
        id: 0,
        title: 'hello world',
        description: 'This is my first project',
        imageURL: '../../assets/img/AngularPlaceHolder.jpg',
      },
    ];
    this.indexOfNextProject = this.projectList.length;
  }

  // Returns a value mainly for the purpose of testing.
  addProjectToList(projectDetailEntry: ProjectDetails): ProjectDetails {
    this.projectList[this.indexOfNextProject] = projectDetailEntry;
    this.indexOfNextProject++;
    return projectDetailEntry;
  }
}
