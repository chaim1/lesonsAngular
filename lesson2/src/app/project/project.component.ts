import { Component, OnInit, Input } from '@angular/core';
import { Projects } from '../models/project.modul';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
@Input() project: Projects;
  constructor() { }

  ngOnInit() {
  }

}
