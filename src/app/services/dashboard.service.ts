import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dataSubject = new BehaviorSubject<string>("G'day Ali Hassan");
  data$ = this.dataSubject.asObservable();
  constructor(private http:HttpClient){}

  setData(value: string): void {
    this.dataSubject.next(value);
  }

  getData(): string {
    return this.dataSubject.getValue();
  }
  fakeCall(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  seoTags(){
    return this.http.get('http://35.168.1.147:8080/api/stellar/seo/home')
  }
}
