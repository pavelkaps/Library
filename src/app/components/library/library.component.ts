import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  //articles: Article[] = [];
  article: Article = new Article();
  constructor() {}

  addArticle(article: Article){
    //this.articles.push(article);
    this.article = article;
  }

  ngOnInit() {
  }

}
