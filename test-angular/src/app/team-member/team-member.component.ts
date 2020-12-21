import { Component, OnInit } from '@angular/core';
import {Bugs} from "../model/bugs";
import {RegistrationService} from "../service/registration.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  bugs : Bugs[]

  constructor(private _service : RegistrationService,private route : Router) { }

  ngOnInit(): void {
    this.getBugsList();
  }

  public getBugsList() {

    this._service.getBugsForTeamMembers().subscribe(
      data => {
        this.bugs = data;
        console.log("bugs for user" + JSON.stringify(data));
      },
      error => {
        console.log("check your internet connection")
    }
    )
  }

  updateBug(bugId: number) {
    this.route.navigate(['updatebug',bugId]);
  }
}
