import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {TeamService} from "../service/team.service";
import {RegistrationService} from "../service/registration.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  // for user in html ngfor
  users : User[];


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
    this.getTeam();
  }

  private getTeam() {
    this.registrationService.getProjectTeamList().subscribe(
      data => {
        this.users = data;
        console.log('JSON Response = ', JSON.stringify(data));
      }
    );
  }

}
