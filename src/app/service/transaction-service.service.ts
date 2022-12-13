import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Transaction[]>('http://localhost:8025/api/transactions')
  }

  selectById(id:number)
  {
    return this.http.get<Transaction>(`http://localhost:8025/api/transactions/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/transactions/${id}`)
  }

  add(transaction:Transaction)
  {
    return this.http.post(`http://localhost:8025/api/transactions`,transaction)
  }
}
