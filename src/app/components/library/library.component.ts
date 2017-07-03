import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  articles: Article[] = [];
  checkedArticles: Article[] = [];
  constructor() {}

  addArticle(article: Article){
    this.articles.push(article);
  }

  checkArticle(checked: boolean, article: Article){
    checked ? this.checkedArticles.push(article) 
            : this.checkedArticles = this.checkedArticles.filter((a) => a !== article);
  }

  delete(){
    this.articles = this.articles.filter((article) => !this.checkedArticles.some((a) => a === article));
    this.checkedArticles = [];
  }

  ngOnInit() {
  }

}
