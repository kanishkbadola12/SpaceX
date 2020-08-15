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
  constructor(private apiFactoryService: ApiFactoryService) { }
  public programsObject: Array<SpacePrograms> = new Array();

  ngOnChanges() {
    this.programsObject = [];
    if (this.selectedFilterValues.length !== 0) {
      this.apiFactoryService.getYearlyProgramData(this.selectedFilterValues).subscribe(
        (data) => {
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
      )
    }
    console.log('Rendering data', this.programsObject)
  }

  ngOnInit() {}
}
