import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL="http://localhost:8080/books/list"

  constructor(private httpClient:HttpClient) { }

  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  createBook(book:Book):Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/books/new`,book);

  }

  updateBook(id:number,book:Book):Observable<Object>{
    return this.httpClient.patch(`http://localhost:8080/books/edit/${id}`,book);
  }

  deleteBook(id:number):Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/books/delete/${id}`,null);
  }
}
