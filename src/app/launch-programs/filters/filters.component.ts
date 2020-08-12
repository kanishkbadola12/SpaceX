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
  public selectedFilterValue: string = '';

  ngOnInit() {
    this.apiFactoryService.getFiltersData().subscribe(
      data => {
        this.launchYears = data.map(value => value.launch_year)
        this.launchYears = [...new Set(this.launchYears)];        
        for (let i = 0; i < this.launchYears.length; i++) {
          if (this.launchYears[i]%2 === 0) {
            this.storeEvenValue = this.launchYears[i];
          }
          else {
            this.renderingLaunchYears.push({even: this.storeEvenValue, odd: this.launchYears[i]})
          }
        }
        this.renderingLaunchYears.push({even: this.storeEvenValue})
        console.log(this.renderingLaunchYears)
      }
    )
  }

  public getYearValue(yearValue: string): void {
    this.selectedFilterValue = yearValue;
  }

  // public successfullLaunch(launchValue: string): void {
  //   this.selectedFilterValue = launchValue;
  // }

  // public successfullLand(landValue: string): void {
  //   this.selectedFilterValue = landValue;
  // }

}
