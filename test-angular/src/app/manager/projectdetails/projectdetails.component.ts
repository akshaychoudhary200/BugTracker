import { Component, OnInit } from '@angular/core';
import {Bugs} from "../../model/bugs";
import {RegistrationService} from "../../service/registration.service";

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  bug : Bugs[];

  name : String;
  desc : String;
  status : string;

  constructor(private service : RegistrationService) { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("projectname")
    this.desc = sessionStorage.getItem("projectdesc")
    this.status = sessionStorage.getItem("projectstatus")

    this.getBugsList();
  }

  private getBugsList() {
    this.service.getAllBugs().subscribe(
      data => {
        this.bug = data;
      },
      error => {
        console.log("no bugs");
      }
    )
  }

  delete(bugId: number, bugDesc: string) {
    alert("you sure want to delete? \n"+bugId+" "+bugDesc)
    this.service.deletbugbyid(bugId).subscribe(
      data=> {
        console.log(data)
        this.getBugsList()
      },
      error=> {
        console.log("error while deleting")
      }
    )
  }
}
