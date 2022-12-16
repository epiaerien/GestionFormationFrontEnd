import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payement } from '../models/payement';

@Injectable({
  providedIn: 'root'
})
export class PayementServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Payement[]>('http://localhost:8025/api/payements')
  }

  selectById(id:number)
  {
    return this.http.get<Payement>(`http://localhost:8025/api/payements/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/payements/${id}`)
  }

  add(payement:Payement)
  {
    return this.http.post(`http://localhost:8025/api/payements`,payement)
  }
}

