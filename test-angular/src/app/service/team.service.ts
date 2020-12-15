import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //user : User;

  private apiURL = "localhost:8080/getprojectteam";

  constructor(private _httpClient:HttpClient) { }

}
