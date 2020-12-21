import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {User} from "../../model/user";
import {TeamService} from "../../service/team.service";
import {RegistrationService} from "../../service/registration.service";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  users : User[];
  user : User;

  teams : Array<User> = [];
  //teamMap = new Map();

  constructor(private _registrationService:RegistrationService) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  private getEmployeesList() {
    this._registrationService.getProjectTeamList().subscribe(
      data => {
        this.users = data;
        console.log(JSON.stringify(data));
      },
      error => {
        console.log("error occured while getting user list")
      }
    )
  }

  onSelectUser(user : User) {
    console.log(JSON.stringify(user));
    this.teams.push(user);
    console.log(this.teams)

    for(let team of this.teams) {
      console.log(team);
    }

    // using map
/*   if(this.teamMap.has(user.id)) {
      console.log("member already added cant add")
    } else {
      this.teamMap.set(user.id,user);
    }*/

  }

  onDeleteUser(user : User) {
/*    if(!(this.teamMap.has(user.id))) {
      console.log("cant delete no user exists")
    } else {
      this.teamMap.delete(user.id);
    }*/
  }

  onClickCreate() {
    this._registrationService.saveprojectMembers(this.teams);
  }

}
