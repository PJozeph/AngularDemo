import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';

export class PostServcie {

    errorEvent = new Subject<string>();

    constructor(private http: HttpClient) { }

    createPost(postData: Post) {
        this.http
            .post<{ name: string }>(
                'https://ng-complete-guide-24d96.firebaseio.com/posts.json',
                postData,
                {
                    observe: 'response'
                }
            )
            .subscribe(responseData => {
                console.log(responseData);
            }, error => {
                this.errorEvent.next(error.message)
            });
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-24d96.firebaseio.com/posts.json',
            {
                headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                params: new HttpParams().set('print', 'prety'),
                responseType: 'json'
            })
            .pipe(map(responseData => {
                const postArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postArray.push({ ...responseData[key], id: key })
                    }
                }
                return postArray;
            }), catchError(errorResponse => {
                return throwError(errorResponse);
            })
            )
    }

    deleteAllPosts() {
        return this.http.delete('https://ng-complete-guide-24d96.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'text'

            }).pipe(tap(event => {
                if (event.type === HttpEventType.Sent) {

                }

                if (event.type === HttpEventType.Response) {
                    console.log(event.body);
                }
            }));
    }

}