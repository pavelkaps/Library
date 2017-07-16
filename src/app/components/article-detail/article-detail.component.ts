import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  private article: Article = new Article();
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private articleService: ArticleService) { 
    this.subscription = activateRoute.params.subscribe(params => {
      this.articleService.getOneArticle(params['id']).then((articles) => {
        this.article = articles[0];
      })
    });
  }

  ngOnInit() {
  }
}
