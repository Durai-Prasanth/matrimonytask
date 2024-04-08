import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../model/userdata.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URI = './assets/userdata.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<UserData> {
    return this.http.get<UserData>(this.URI);
  }
}
