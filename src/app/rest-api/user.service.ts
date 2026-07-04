import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users, UserResponse } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://dummyjson.com/users');
  }
}