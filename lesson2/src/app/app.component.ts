import { Component, OnInit } from '@angular/core';
import { Projects } from './models/project.modul';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects: Projects[];
  ngOnInit() {
    this.projects=[];
  }
  addEvent(name: string, desc: string, goal: number){
    if (!name || !desc || !goal ) return;
    if (Number.isNaN(Number(goal))) return;
   
    const $p = <Projects>{
      name: name,
      desc: desc,
      goal: Number(goal),
      balance: 0
    }
    this.projects.push($p);
  }
  title = 'lesson2';

}
