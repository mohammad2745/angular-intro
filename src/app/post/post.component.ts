import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  title: string = 'post title';
  
  constructor() {}

  ngOnInit(): void {

  }
}
