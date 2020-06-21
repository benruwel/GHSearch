import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { map, catchError } from 'rxjs/operators';

import { Repo } from './../repo-class/repo';
import { RepoModel } from './../repo-class/repo.model';
import { User } from '../user-class/user';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  private username = 'Teresia-Kirungo';
  usersUrl = 'https://api.github.com/users/';

  user : User;
  repos : Repo[];
  constructor(private http : HttpClient) {
    this.user = new User("", "", "", 0, "", "");
    //this.repos = new Repo("", "", "", "", new Date())
   }

  updateUsername(username : string){
    this.username = username;
  }
   
  getUserInfo() {
    interface ApiResponse {
      
      login : string,
      name : string,
      avatar_url : string,
      public_repos : number,
      repos_url : string,
      bio : string
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`${this.usersUrl}${this.username}`, { 
          headers : {
          "Authorization" : `token ${environment.apiKey}`
        }
      }).toPromise().then((response) => {
        this.user.login = response.login
        this.user.name = response.name
        this.user.avatar_url = response.avatar_url
        this.user.repos_number = response.public_repos
        this.user.repos_list = response.repos_url
        this.user.bio = response.bio


        if ( this.user.bio == null ) {
          var bioNull = "The user has no bio";
          this.user.bio = bioNull;
        }

        resolve()
      },
       error => {
        if (error) {
          var loginNull = "Invalid username and/or no such name";
          this.user.login = loginNull;
        }
        reject(error)
      })
    })

    return promise;
  }

  getRepoInfo() {
    
        
         return this.http.get(`${this.usersUrl}${this.username}/repos`, { 
            headers : {
            "Authorization" : `token ${environment.apiKey}`
          }
          }).pipe(
          map((response : RepoModel[]) => {
            return response;
          }), catchError(error => {
            return throwError("No data came through", error)
          })
        )

    }

  }

