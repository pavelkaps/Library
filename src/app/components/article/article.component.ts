import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article'

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = new Article();
  @Output() checkArticle = new EventEmitter<boolean>();

  checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  check(){
    this.checkArticle.emit(this.checked);
  }

  getImageSrc(){
    return this.article.imageUrl ? this.article.imageUrl : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
  }
}
