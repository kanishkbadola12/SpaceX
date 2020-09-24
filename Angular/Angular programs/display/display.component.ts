import { Component, OnInit } from '@angular/core';
import { DataTransferService } from "../data-transfer.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public displayFormData: Object;
  constructor(private dataTransferService: DataTransferService) {
   }
  
  ngOnInit() {
    this.dataTransferService.sendFormData().subscribe(data => this.displayFormData = data)
  }

}
