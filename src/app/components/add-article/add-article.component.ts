import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Article } from '../../models/article';

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  @Output() newArticle = new EventEmitter<Article>();
  article: Article;
  addArticleForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addArticleForm = formBuilder.group({
            "imageUrl": ["", [Validators.pattern("(https?:\/\/.*\.(?:png|jpg))") ]],
            "author": ["", [ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            "title": ["", [ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            "description": ["", [ Validators.required, Validators.minLength(5), Validators.maxLength(255)]]
        });
  }

  getImageSrc(){
    const image = this.addArticleForm.controls.imageUrl.value;
    return image ? image : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
  }

  ngOnInit() {
  }

  addArticle(){
    if(!this.addArticleForm.valid) return;
    this.article = new Article();

    this.article.author = this.addArticleForm.controls.author.value;
    this.article.imageUrl = this.addArticleForm.controls.imageUrl.value;
    this.article.title = this.addArticleForm.controls.title.value;
    this.article.description = this.addArticleForm.controls.description.value;
    this.article.date = new Date();

    this.addArticleForm.reset();
    this.newArticle.emit(this.article);
  }
}
