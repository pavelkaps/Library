import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  articles: Article[] = [];
  
  constructor() {
    let article = new Article();
    article.author = "John";
    article.date = new Date();
    article.title = "First title";
    article.description = "It's my fitst article";
    article.imageUrl = "http://design.imaginea.com/wp-content/uploads/2016/08/Android-L-Material-Design-Wallpapers-5.png";
    this.articles.push(article);

    let article2 = new Article();
    article2.author = "Johnny";
    article2.date = new Date();
    article2.title = "Second title";
    article2.description = "It's my second article";
    article2.imageUrl = "https://s.androidinsider.ru/2014/12/1_Material_Design.@750.jpg";
    this.articles.push(article2);
  }

  ngOnInit() {
  }

}
