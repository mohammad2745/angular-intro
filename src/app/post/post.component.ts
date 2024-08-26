import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  title: string = 'post title';
  messagePost: string = 'message from post component';

  @Input()
  fromParent!: string;

  constructor() {}

  ngOnInit(): void {

  }
}
