import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../models/article'
import { Router} from '@angular/router';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = new Article();
  @Output() checkArticle = new EventEmitter<boolean>();

  checked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  check(){
    this.checkArticle.emit(this.checked);
  }
}
