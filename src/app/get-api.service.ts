import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  constructor(private http:HttpClient) { }


  getApi(): Observable<Data[]>{
    return this.http.get<Data[]>('https://fakestoreapi.com/products/category/jewelery');
    }

  callApi(): Observable<Data[]>{
    return this.http.get<Data[]>('https://fakestoreapi.com/products/category/electronics');
    }

  callsApi(): Observable<Data[]>{
    return this.http.get<Data[]>('https://fakestoreapi.com/products/category/men\'s clothing');
    }

  getsApi(): Observable<Data[]>{
    return this.http.get<Data[]>('https://fakestoreapi.com/products/category/women\'s clothing');    
    }

  getItem(): Observable<Data[]>{
    return this.http.get<Data[]>('https://fakestoreapi.com/products');
  }

  public getProduct(id: any): Observable<Object>{
  return this.http.get('https://fakestoreapi.com/products/'+id); //call one api from all products use public and id
  }
  
}
