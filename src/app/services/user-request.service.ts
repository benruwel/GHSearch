import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { User } from '../user-class/user';


@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  usersUrl = "https://api.github.com/users/Teresia-Kirungo";

  user : User;

  constructor(private http : HttpClient) {
    this.user = new User("", "", "", 0, "", "")
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
      this.http.get<ApiResponse>(`${this.usersUrl}`, { 
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
        reject(error)
      })
    })

    console.log(promise)

    return promise;

  }

}
