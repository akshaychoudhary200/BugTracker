import { Component, OnInit } from '@angular/core';
import {Project} from "../../model/project";
import {Router} from "@angular/router";
import {RegistrationService} from "../../service/registration.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  project = new Project();

  constructor(private _route:Router,private _service : RegistrationService) { }

  ngOnInit(): void {

  }

  createProject() {
    this._service.saveProjectFromRest(this.project).subscribe(
      data => {
        console.log("project created");

        sessionStorage.setItem("projectId",JSON.stringify(this.project))
        let createdProject = sessionStorage.getItem("projectId")
        console.log(JSON.parse(createdProject))
        console.log(sessionStorage.getItem("projectId"))

        this._route.navigate(['/createteam']);
      },
      error => {
        console.log("project create failed");
      }
    )
  }
}
