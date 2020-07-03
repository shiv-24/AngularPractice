import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    return this.http.post<{ name: string }>(
      "https://angular-demo-project-b6394.firebaseio.com/posts.json",
      post,
      {
        observe: "response"
      }
    );
  }

  fetchPost() {
    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-demo-project-b6394.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({
            "Custom-Header": "hello",
            "Custom-Header2": "hello2"
          }),
          params: new HttpParams().set("print", "pretty").set("preety", "ssd"),
          responseType: "json" // this is used to changed the type of response.
        }
      )
      .pipe(
        map(responseData => {
          const postArr: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArr.push({ ...responseData[key], id: key });
            }
          }
          return postArr;
        }),
        catchError(errorResponse => {
          // use if for generic error handling.
          return throwError(errorResponse);
        })
      );
  }

  deletePost() {
    return this.http
      .delete("https://angular-demo-project-b6394.firebaseio.com/posts.json", {
        observe: "events"
      })
      .pipe(
        tap(event => {
          console.log(event);
        })
      );
  }
}
