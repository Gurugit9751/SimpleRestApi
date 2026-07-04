import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Users, UserResponse } from './users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rest-api.html',
  styleUrl: './rest-api.css'
})

export class RestApi implements OnInit {

  usersList$!: Observable<Users[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.usersList$ = this.userService.getUsers().pipe(
      map(res => res.users)
    );

  }
}