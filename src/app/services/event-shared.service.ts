import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class EventSharedService {
   @Output() deleteBtnActive = new EventEmitter<boolean>();
   @Output() deleteAction = new EventEmitter<any>();
  constructor() { }
}
