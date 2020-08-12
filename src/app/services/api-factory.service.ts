import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {
  constructor(private http: HttpClient) { }
  public getFiltersData(): Observable<any> {
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100');
  }
   // public sendRequestPageData(requestPageForm: FormGroup): Observable<any> {
  //   return this.http.post<FormGroup>('https://solvay-tpc-datalake-dev.appspot.com/tpc_backend_app/create_request/', JSON.stringify(requestPageForm), 
  //     {
  //       headers: new HttpHeaders ({
  //       'Content-Type': 'application/json',
  //     })
  //     })
  // }


}
