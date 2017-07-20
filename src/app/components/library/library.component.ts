import { Component } from '@angular/core';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service'
import { EventSharedService } from '../../services/event-shared.service'

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent{
  deleteButtonActive: boolean = false;

  constructor(private eventSharedService: EventSharedService){
    this.eventSharedService.deleteBtnActive.subscribe((check) => {
      this.deleteButtonActive = check;
    })
  }

  delete(){
    this.eventSharedService.deleteAction.emit();
  }
}
