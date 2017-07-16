import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service'
@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  articles: Article[] = [];
  checkedArticles: Article[] = [];

  constructor(private articleService : ArticleService) {
    this.articleService.getArticles().then((articles) => this.articles = articles).then(() => console.log(this.articles));
  }

  addArticle(article: Article){
    this.articleService.addArticles(article).then(res => this.articles = this.articles.concat(res));
  }

  checkArticle(checked: boolean, article: Article){
    checked ? this.checkedArticles.push(article) 
            : this.checkedArticles = this.checkedArticles.filter((a) => a !== article);
  }

  delete(){
    const promises = this.checkedArticles
      .map(article => this.articleService.deleteArticle(article.id));
    Promise.all(promises).then(() => {
      this.articles = this.articles.filter((article) => !this.checkedArticles.some((a) => a === article));
      this.checkedArticles = [];
    });
    
  }

  ngOnInit() {
  }

}
