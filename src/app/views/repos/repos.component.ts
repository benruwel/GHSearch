import { RepoRequestService } from './../../services/repo-request.service';
import { Component, OnInit } from '@angular/core';
import { RepoSearchModel } from 'src/app/repo-class/repo-search.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repo$ : RepoSearchModel[];
  searchTerm : string;


  constructor(private repoRequestServiceService : RepoRequestService) { }

  ngOnInit(): void {

  }
  
  search() {
    this.repoRequestServiceService.updateSearchTerm(this.searchTerm)
    this.repoRequestServiceService.getSearchResults()
    .subscribe((data : any) =>{
      this.repo$ = data.items
    })
  }

}
