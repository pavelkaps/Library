import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article'

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = new Article();
  constructor() { }

  ngOnInit() {
  }

}
