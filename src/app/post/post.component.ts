import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  title: string = 'post title';
  messagePost: string = 'message from post component';
  childMessage: string = 'from child component';
  outputChildMessage: string = 'message from child component via output';

  @Input()
  fromParent!: string;

  @Output() messageEvent = new EventEmitter<string> ();

  constructor() {}

  ngOnInit(): void {

  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
