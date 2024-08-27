import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
import { After } from 'v8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'angular-intro';
  parentMessage:string = 'message from parent component';
  message: string = '';
  fromChild: string = '';

  @ViewChild(PostComponent) childComp: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.message = this.childComp.childMessage;
  }

  receiveMessage(event: any) {
    this.fromChild = event;
  }
}
