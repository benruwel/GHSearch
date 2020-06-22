import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepoHighlighter]'
})
export class RepoHighlighterDirective {


  constructor(private elem : ElementRef, private renderer : Renderer2) {

    // thirenderer.setStyle('elem.nativeElement', 'color', 'red')
    
    // let repoCount = this.user.repoCount;
    // console.log(repoCount);
    // if ( repoCount == 10 ) {
    //   this.elem.nativeElement.style.color = "red";
      
    // }
  }

  @HostListener ('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color : string) {
    this.elem.nativeElement.style.color = color;
  }


  

}
