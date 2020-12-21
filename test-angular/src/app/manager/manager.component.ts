import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {TeamService} from "../service/team.service";
import {RegistrationService} from "../service/registration.service";
import {Project} from "../model/project";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  // for user in html ngfor / user list
 users : User[];
 projects : Project[];

 componentName : String;
  userName: String;


  constructor(private registrationService : RegistrationService) { }

  ngOnInit(): void {
/*    this.users = [
      {
        "id": 1,
        "userName": "akshay",
        "emailId": "akshay@gmail.com",
        "role": "backend",
        "password":" "
      },
      {
        "id": 1,
        "userName": "akshay",
        "emailId": "akshay@gmail.com",
        "role": "backend",
        "password":" "
      }
    ];*/

    let u = JSON.parse(sessionStorage.getItem("userLogin"));
    this.userName = u.userName;
    console.log(u.userName)
    this.getTeam();
    this.getProjects();

  }

  private getTeam() {
    this.registrationService.getProjectTeamList().subscribe(
      data => {
        this.users = data;
        console.log('JSON Response = ', JSON.stringify(data));
      }
    );
  }

  private getProjects() {
    this.registrationService.getProjectListFromRest().subscribe(
      data => {
        this.projects = data;
        console.log('JSON Res: ',JSON.stringify(data));
      },
      error => {
        console.log("error occured");
      }
    )
  }

}
