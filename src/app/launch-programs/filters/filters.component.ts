import { Component, OnInit} from '@angular/core';
import { ApiFactoryService } from '../../services/api-factory.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor(private apiFactoryService: ApiFactoryService) { }
  public programData: Array<object> =[];
  public launchYears: Array<number> = [];
  public renderingLaunchYears: Array<object> = [];
  private storeEvenValue: number = 0;
  public selectedYearValue: string;
  public launchValue: boolean;
  public landValue: boolean;
  public filterValues: Array<any> = [];
  public selectedFilterValues: Array<any> = [];
  public yearId: number;
  public launchId: string;
  public landId: string;

  ngOnInit() {
    this.apiFactoryService.getFiltersData().subscribe(
      data => {
        this.launchYears = data.map(value => value.launch_year)
        this.launchYears = [...new Set(this.launchYears)];
        for (let i = 0; i < this.launchYears.length; i++) {
          if (this.launchYears[i] % 2 === 0) {
            this.storeEvenValue = this.launchYears[i];
          }
          else {
            this.renderingLaunchYears.push({ even: this.storeEvenValue, odd: this.launchYears[i] })
          }
        }
        this.renderingLaunchYears.push({ even: this.storeEvenValue })
        this.programData = data;
      }
    )
  }

  public getFilterValue(yearValue?: any, id?: any): void {
    this.filterValues = [];
    if (typeof yearValue === 'string') {
      this.selectedYearValue = yearValue;
      this.yearId = id;
    }
    else {
      if (yearValue.id === 'launchSuccess') {
        this.launchValue = true;
        this.launchId = yearValue.id;
      }
      else if (yearValue.id === 'launchFailure') {
        this.launchValue = false;
        this.launchId = yearValue.id;
      }
      else if (yearValue.id === 'landSuccess') {
        this.landValue = true;
        this.landId = yearValue.id;
      }
      else if (yearValue.id === 'landFailure') {
        this.landValue = false;
        this.landId = yearValue.id;
      }
    }
    this.filterValues.push(this.launchValue, this.landValue, this.selectedYearValue);
    this.selectedFilterValues = this.filterValues;
  }
}
