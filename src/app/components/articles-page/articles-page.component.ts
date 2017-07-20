import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../../services/article.service'
import { Article } from '../../models/article'
import { EventSharedService } from '../../services/event-shared.service'

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];
  checkedArticles: Article[] = [];

  constructor(private articleService : ArticleService,
              private eventSharedService: EventSharedService) {
    this.articleService.getArticles().then((articles) => this.articles = articles);
    this.eventSharedService.deleteAction.subscribe(() => this.delete());
  }

  addArticle(article: Article){
    this.articleService.addArticles(article).then(res => this.articles = this.articles.concat(res));
  }

  checkArticle(checked: boolean, article: Article){
    checked ? this.checkedArticles.push(article) 
            : this.checkedArticles = this.checkedArticles.filter((a) => a !== article);
    this.checkDeleteAction();
  }

  delete(){
    const promises = this.checkedArticles
      .map(article => this.articleService.deleteArticle(article.id));

    Promise.all(promises).then(() => {
      this.articles = this.articles.filter((article) => !this.checkedArticles.some((a) => a === article));
      this.checkedArticles = [];
      this.checkDeleteAction();
    });
  }

  checkDeleteAction(){
    const checked = !(this.checkedArticles.length === 0);
    this.eventSharedService.deleteBtnActive.emit(checked);
  }

  ngOnInit() {
  }
}
