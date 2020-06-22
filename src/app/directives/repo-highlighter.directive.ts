import { UserComponent } from './../views/user/user.component';
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Users } from "../user-class/user.model";

@Directive({
  selector: '[appRepoHighlighter]'
})
export class RepoHighlighterDirective {

  user : UserComponent;

  constructor(private elem : ElementRef, private renderer : Renderer2) {

    // thirenderer.setStyle('elem.nativeElement', 'color', 'red')
    
    let repoCount = this.user.repoCount;
    console.log(repoCount);
    if ( repoCount == 10 ) {
      this.elem.nativeElement.style.color = "red";
      
    }
  }

  

}
