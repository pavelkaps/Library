import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styles: [`
    :host h1,
    :host h2,
    :host >>> h3,
    :host >>> p{
      font-family: Verdana;
    }
  `]
})
export class LibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
