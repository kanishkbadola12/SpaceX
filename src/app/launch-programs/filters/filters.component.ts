import { Component, OnInit } from '@angular/core';
import { ApiFactoryService } from '../../services/api-factory.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor(private apiFactoryService: ApiFactoryService) { }
  public launchYears: Array<number> = [];
  public renderingLaunchYears: Array<object> = [];
  private storeEvenValue: number = 0;
  public selectedYearValue: string;
  public launchValue: boolean;
  public landValue: boolean;
  public filterValues: Array<any> = [];
  public perviousId: number = 0;
  public selectedFilterValues: Array<any> = [];

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
      }
    )
  }

  public getFilterValue(yearValue?: any, id?: any): void {
    this.filterValues = [];
    if (typeof yearValue === 'string') {
      this.highlightSelectedValue(id);
      this.selectedYearValue = yearValue
    }
    else {
      if (yearValue.id === 'launchSuccess') {
        this.highlightSelectedValue(yearValue.id);
        this.launchValue = true;
      }
      else if (yearValue.id === 'launchFailure') {
        this.highlightSelectedValue(yearValue.id);
        this.launchValue = false;
      }
      else if (yearValue.id === 'landSuccess') {
        this.highlightSelectedValue(yearValue.id);
        this.landValue = true;
      }
      else if (yearValue.id === 'landFailure') {
        this.highlightSelectedValue(yearValue.id);
        this.landValue = false;
      }
    }
     this.filterValues.push(this.launchValue, this.landValue, this.selectedYearValue);
     this.selectedFilterValues = this.filterValues;
  }

  public highlightSelectedValue(id: any): void {
    let previousElement = document.getElementById(this.perviousId.toString()) as HTMLInputElement;
    previousElement.classList.remove('active')
    let element = document.getElementById(id.toString()) as HTMLInputElement;
    element.classList.add('active')
    this.perviousId = id;
  }
}
