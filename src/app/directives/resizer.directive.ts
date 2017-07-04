import { Directive, ElementRef, Renderer, HostListener, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[resizer]'
})
export class ResizerDirective implements AfterViewInit{
  minWidth: number;
  minHeight: number;
  @Input() kof: number = 1;

  constructor(private element: ElementRef, private renderer: Renderer){}

  ngAfterViewInit() {
    this.minWidth = this.element.nativeElement.offsetWidth;
    this.minHeight = this.element.nativeElement.offsetHeight;
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.element.nativeElement.style.width = `${this.minWidth * this.kof}px`;
    this.element.nativeElement.style.height = `${this.minHeight * this.kof}px`;
  }
 
  @HostListener("mouseleave") onMouseLeave() {
    this.element.nativeElement.style.width = `${this.minWidth}px`;
    this.element.nativeElement.style.height = `${this.minHeight}px`;
  }

}
