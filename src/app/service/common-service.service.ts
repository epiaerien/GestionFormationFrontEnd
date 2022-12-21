import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private subjectRefresh = new Subject<any>();

  sendUpdate(message:string){
    this.subjectRefresh.next({text:message});
  }

  getUpdate():Observable<any>
  {
    return this.subjectRefresh.asObservable();
  }


}
