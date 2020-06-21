import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as Rx from "rxjs/Rx";
import { Observable, of, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';

import { RepoSearchModel } from "../repo-class/repo-search.model";

import { RepoSearch } from "../repo-class/repo-search";

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {

  repos : RepoSearch

  reposUrl = 'https://api.github.com/search/repositories?q='
  private searchTerm = 'Octocat'
  searchParameters = '+in:name+in:description'

  constructor(private http : HttpClient) {
   }

  updateSearchTerm(searchTerm : string) {
    this.searchTerm = searchTerm
  }

  getSearchResults() {
    
    return this.http.get(`${this.reposUrl}${this.searchTerm}${this.searchParameters}`)
    .pipe(
      map((response : RepoSearchModel[]) => {
        return response
      }), catchError( error => {
        return throwError('No data came through', error)
      })
    )
      

}
}