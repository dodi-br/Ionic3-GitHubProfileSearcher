import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';

import { USER_LIST } from '../mocks/user.mocks';
import { REPOSITORY_LIST } from '../mocks/repository.mocks';

@Injectable()

export class GithubService {
  private baseUrl: string = "https://api.github.com/users";

  constructor(private http: Http) {
    console.log('Hello GithubService Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error || "server error."));
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name == username));
  }
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username ) [0]);
  }


}
