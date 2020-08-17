import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiFactoryService } from '../../services/api-factory.service';
import { SpacePrograms } from 'src/app/Models/programs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit, OnChanges {
  @Input() selectedFilterValues: Array<any>;
  @Input() programData: Array<object>;
  public programsObject: Array<SpacePrograms> = new Array();
  public programDataWithoutFilters: Array<object>;
  constructor(private apiFactoryService: ApiFactoryService) { }

  ngOnChanges() {
    if (this.selectedFilterValues.length !== 0) {
      this.apiFactoryService.getYearlyProgramData(this.selectedFilterValues).subscribe(
        (data) => {
          this.componentDataToRender(data);
        }
      )
    }
  }

  ngOnInit() {
    this.programDataWithoutFilters = this.programData;
    this.componentDataToRender(this.programDataWithoutFilters);
  }

  componentDataToRender(data):void {
    console.log('Rendering data', data);
    this.programsObject = [];
    if (data != '') {
      for (let i = 0; i < data.length; i++) {
        this.programsObject.push({
          'missionNames': data[i].mission_name,
          'flightNumbers': data[i].flight_number,
          'missionIDs': data[i].mission_id,
          'launchSuccesses': data[i].launch_success,
          'imageLinks': data[i].links.mission_patch_small,
          'launchYear': data[i].launch_year
          },
        )
      }
    }
    else {
      alert('No data available');
    }
  }

}

