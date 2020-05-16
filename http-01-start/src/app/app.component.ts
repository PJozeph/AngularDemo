import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostServcie } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  error = null;
  errorSubscription: Subscription;

  constructor(private http: HttpClient, private postService: PostServcie) { }

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: Post) {
    this.errorSubscription = this.postService.errorEvent.subscribe((message) => {
      this.error = message;
    });
    this.postService.createPost(postData);
  }

  onFetchPosts() {
    this.fetchPost();
  }

  onClearPosts() {
    this.postService.deleteAllPosts().subscribe(() => {
      this.fetchPost();
    }, error => {
      console.log(error)
      this.error = error.message;
    });
  }

  private fetchPost() {
    this.postService.fetchPosts().subscribe((posts) => {
      this.loadedPosts = posts
    }, error => {
      console.log(error);
      this.error = error.message;
    });
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  errorHandling() {
    this.error = null;
  }
}
