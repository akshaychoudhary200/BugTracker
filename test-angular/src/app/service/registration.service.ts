import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

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
    return this._http.get<User[]>("http://localhost:8080/getprojectteam");
  }
}
