import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  public tableData: any;
  public finalValues: any;
  public searchTerm: string = '';
  public keys: Array<string> = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(
      response => { this.tableData = response
        this.showTable(this.tableData)
      for(const key in this.tableData[0]) {
        this.keys.push(key)
        }
      }
    )
  }
  private search(): void {
    console.log(this.searchTerm)
    const filteredData = [];
    for (let i=0; i< Object.keys(this.tableData).length; i++) {
      if (this.tableData[i].title.includes(this.searchTerm)) {
         filteredData.push(this.tableData[i])
      }
    }
    this.showTable(filteredData)
  }

  private showTable(finalValue: any): void {
    this.finalValues = finalValue;
  }

}
