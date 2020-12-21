import { Component, OnInit } from '@angular/core';
import {Projects} from "@angular/cli/lib/config/schema";
import {RegistrationService} from "../../service/registration.service";
import {Project} from "../../model/project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css']
})
export class ViewProjectsComponent implements OnInit {

  projects : Project[]

  constructor(private _registrationService : RegistrationService,private _route : Router) { }

  ngOnInit(): void {
    this.getProjectList();
  }

  public getProjectList() {
    this._registrationService.getProjectListFromRest().subscribe(
      data => {
        this.projects = data;
        console.log(data[0].projectId)
      },
      error => {
        console.log("cant find any projects")
    }
    )
  }

  goto(projectName: string, projectStatus: string, projectDesc: string) {
    sessionStorage.setItem("projectname",projectName)
    sessionStorage.setItem("projectstatus",projectStatus)
    sessionStorage.setItem("projectdesc",projectDesc)
    this._route.navigate(["/projectdetails"]);
  }
}
