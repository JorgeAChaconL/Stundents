import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl ='http://localhost:4000/api/'

  constructor(public http: HttpClient) { }

  public getApi(){
    return this.http.get(this.apiUrl+ 'getGreeting/')
  }

  public postApi(data){
    return this.http.post(this.apiUrl + 'postName/', data)
  }
}
