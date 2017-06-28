import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  @Output() newArticle = new EventEmitter<Article>();
  article: Article = new Article();
  
  constructor() { }

  getImageSrc(){
    return this.article.imageUrl ? this.article.imageUrl : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
  }

  ngOnInit() {
  }

  addArticle(){
    this.article.date = new Date();
    this.newArticle.emit(this.article);
    this.article = new Article();
  }
}
