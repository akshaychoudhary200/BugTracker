import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Project} from "../model/project";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {coerceNumberProperty} from "@angular/cdk/coercion";
import {Bugs} from "../model/bugs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  id : number;
  //dependency inject http which will post our data to rest
  constructor(private _http : HttpClient) { }


  //this will call our rest api end point
  public loginUserFromRest(user : User):Observable<any> {
    // post method sending user as our data to rest
    return this._http.post<any>("http://localhost:8080/login",user)
  }

  public registerFromRest(user : User):Observable<any> {
    return this._http.post<any>("http://localhost:8080/register",user);
  }

  getProjectTeamList() : Observable<User[]> {
    return this._http.get<User[]>("http://localhost:8080/getusers");
  }

  public getProjectListFromRest() : Observable<Project[]> {
    return this._http.get<Project[]>("http://localhost:8080/getprojectlist");
  }

  public saveProjectFromRest(project:Project):Observable<any> {
    console.log("in service"+JSON.stringify(project));

    console.log(sessionStorage.getItem("userId"));

    this.id = Number(JSON.parse(sessionStorage.getItem("userId")))

    return this._http.post<any>(`http://localhost:8080/user/${this.id}/projects`,project);
  }

  public saveprojectMembers(teams: Array<User>):Observable<any> {
    console.log(teams[0]);
    return this._http.post<any>("http://localhost:8080/createteam",teams);
  }

  public getBugsForTeamMembers(): Observable<Bugs[]> {
   // this.id = Number(JSON.parse(sessionStorage.getItem("userId")))
    this.id = 2;
    console.log("bugs list for team member",sessionStorage.getItem("userId"))
    return  this._http.get<Bugs[]>(`http://localhost:8080/getbuglistid/${this.id}`);

  }

  public updateBugsStatus(id: number,bug : Bugs):Observable<Bugs> {
    return  this._http.put<any>(`http://localhost:8080//bugsstatusupdate/${id}`,bug);
  }

  public getbugById(id : number):Observable<Bugs> {
    return this._http.get<any>(`http://localhost:8080/getbugbyid/${id}`)
  }

  public getAllBugs():Observable<Bugs[]> {
    return this._http.get<Bugs[]>("http://localhost:8080/getallbugs")
  }

  public deletbugbyid(bugId: number):Observable<Bugs> {
    console.log(bugId)
    return this._http.delete<any>(`http://localhost:8080/deletebugbyid/${bugId}`)
  }
}
