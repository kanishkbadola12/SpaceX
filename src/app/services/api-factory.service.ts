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

  public getYearlyProgramData(selectedFilterValues: Array<any>) {
    let params = new HttpParams();
    if (selectedFilterValues[0] !== undefined) {
      params = params.set('launch_success', selectedFilterValues[0]);
    }
    if (selectedFilterValues[1] !== undefined) {
      params = params.set('land_success', selectedFilterValues[1]);
    }
    if (selectedFilterValues[2] !== undefined) {
      params = params.set('launch_year', selectedFilterValues[2]);
    }
    console.log(params.toString())
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches', {params})
  }
}
