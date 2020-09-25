import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XasidaService {
  public baseUrl = 'https://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
  }
  public findAll(){
    return this.http.get(`${this.baseUrl}/xasidas`);
  }

}
