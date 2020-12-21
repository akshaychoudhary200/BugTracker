import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  name : String;
  desc : String;
  status : string;

  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem("projectname")
    this.desc = sessionStorage.getItem("projectdesc")
    this.status = sessionStorage.getItem("projectstatus")
  }

}
