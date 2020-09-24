import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  constructor() { }
  public dataSource = new BehaviorSubject(null); 

  getFormData(formData: Object) {  
    this.dataSource.next(formData)
}  
  sendFormData(){  
    return this.dataSource.asObservable();  
}  

}
