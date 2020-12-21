import { Component, OnInit } from '@angular/core';
import {Bugs} from "../../model/bugs";
import {RegistrationService} from "../../service/registration.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  bug: Bugs = new Bugs();
  bugId : number;
  constructor(private regService : RegistrationService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.bugId = this.route.snapshot.params['bugId']
    this.regService.getbugById(this.bugId).subscribe(
      data => {
        this.bug = data;
        console.log(data)
    },
      error => {
        console.log("error")
      }
    )
  }

  onSubmit() {
    this.regService.updateBugsStatus(this.bugId,this.bug).subscribe(
      data=> {
        this.gotoTeamMember();
      },
      error => {
        console.log("error")
      }
    )
  }

  gotoTeamMember() {
    this.router.navigate(['/teammember'])
  }
}
