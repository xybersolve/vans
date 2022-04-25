import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @Input() highlightColor: string = '';
  @Input() defaultColor: string = '';
  @HostListener('mouseenter') onMNouseEnter() {
    this.hilight(this.highlightColor)
  } 
  @HostListener('mouseleave') onMouseLeave() {
    this.hilight('')
  }

  constructor(private el: ElementRef) { }

  private hilight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  } 
}
