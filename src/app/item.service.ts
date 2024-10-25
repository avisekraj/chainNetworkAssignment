import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Public API for fake data

  constructor(private http: HttpClient) {}

  // Method to get list of items
  // getItems(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching items', error);
        return of([]); // Return empty array in case of error
      })
    );
  }
}


