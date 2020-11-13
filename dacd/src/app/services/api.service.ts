import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base:string = 'https://api.github.com/users'
  constructor(private httpClient: HttpClient) { }

  loadData(user:string){
    return this.httpClient.get<any>(`${this.base}/${user}`)
  }
}
