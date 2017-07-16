import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Article } from '../models/article'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  url: string = 'api/articles';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getArticles(){
      return this.http.get(this.url)
        .toPromise()
        .then(response => response.json().data as Article[])
        .catch(this.handleError);;
  }

  getOneArticle(id){
    return this.http.get(`${this.url}/?id=${id}`)
        .toPromise()
        .then(response => response.json().data as Article)
        .catch(this.handleError);;
  }

  addArticles(article: Article){
      return this.http
        .post(this.url, JSON.stringify(article), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Article)
        .catch(this.handleError);
  }

  deleteArticle(id){
      return this.http.delete(`${this.url}/${id}`, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }
}
