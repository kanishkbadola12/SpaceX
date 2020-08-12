import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {
  constructor(private http: HttpClient) { }

  public getFiltersData(): Observable<any> {
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  public getYearlyProgramData(yearValue: string) {
    let params = new HttpParams()
                .set('limit', '100')
                .set('launch_success', 'true')
                .set('land_success', 'true')
                .set('launch_year', yearValue);
    console.log(params.toString())
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches', {params})
  }
}
