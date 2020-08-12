import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiFactoryService } from '../../services/api-factory.service';
import { SpacePrograms } from 'src/app/Models/programs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit, OnChanges {
  @Input() selectedYear: string;
  constructor(private apiFactoryService: ApiFactoryService) { }
  public programsObject: Array<SpacePrograms> = new Array();
  // public programHeading: Array<string> = ['Mission Name:', 'Flight Number:', 'Mission IDs:', 'Launch Year:',
  // 'Successful Launch:', 'Successful Landing:']

  ngOnChanges() {
    console.log(this.selectedYear);
    this.programsObject = [];
    if (this.selectedYear !== '') {
      this.apiFactoryService.getYearlyProgramData(this.selectedYear).subscribe(
        (data) => {
          console.log(data);
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
      )
    }
    console.log(this.programsObject)
  }

  ngOnInit() {
  }
}
