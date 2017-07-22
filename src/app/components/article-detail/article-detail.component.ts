import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service'

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent{
  private article: Article = new Article();
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, 
              private articleService: ArticleService,
              public dialog: MdDialog) { 
    this.subscription = activateRoute.params.subscribe(params => {
      this.articleService.getOneArticle(params['id']).then((articles) => {
        this.article = articles[0];
      })
    });
  }

  openEditDialog(){
    const dialogRef = this.dialog.open(EditDialog, {
      width: '300px',
      data: this.article
    });
  }
}

@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
  styleUrls: ['./edit-dialog.css']
})
export class EditDialog {
  editArticleForm : FormGroup;

  constructor(private formBuilder: FormBuilder, 
              @Inject(MD_DIALOG_DATA) public article: Article,
              private articleService: ArticleService,
              private dialogRef: MdDialogRef<EditDialog>) {

    this.editArticleForm = formBuilder.group({
            "imageUrl": [article.imageUrl, [Validators.pattern("(https?:\/\/.*\.(?:png|jpg))") ]],
            "author": [article.author, [ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            "title": [article.title, [ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            "description": [article.description, [ Validators.required, Validators.minLength(5), Validators.maxLength(255)]]
        });
  }

  editArticle(article: Article){
    if(!this.editArticleForm.valid) return;
    article.author = this.editArticleForm.controls.author.value;
    article.imageUrl = this.editArticleForm.controls.imageUrl.value;
    article.title = this.editArticleForm.controls.title.value;
    article.description = this.editArticleForm.controls.description.value;

    this.articleService.updateArticle(article).then((newArticle) => {
      this.dialogRef.close();   
    });
  }
}
