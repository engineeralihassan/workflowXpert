import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dataSubject = new BehaviorSubject<string>("G'day Ali Hassan");
  data$ = this.dataSubject.asObservable();

  setData(value: string): void {
    this.dataSubject.next(value);
  }

  getData(): string {
    return this.dataSubject.getValue();
  }
}
