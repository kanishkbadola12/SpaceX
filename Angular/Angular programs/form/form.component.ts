import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { DataTransferService } from "../data-transfer.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public testForm: FormGroup;
  public cities: Array<string> = ['Roorkee', 'Gurgaon', 'Bangalore'];
  public states: Array<string> = ['Uttarakhand', 'Haryana', 'Karnataka'];
  public showData: boolean = false;
  public parentFormValue: Object;
  public name: string;
  constructor(private dataTransferService: DataTransferService,
    private router: Router,
    private route: ActivatedRoute) {
    
    this.testForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl('')
      })
    })
   }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(
    //   (params) => this.name = params.get('name')
    // )
    // console.log(this.name)
  }

  public show(): void {
    // this.dataTransferService.getFormData(this.testForm.value);
    this.showData = true;
    this.parentFormValue = this.testForm.value;
    this.router.navigate(['/form/details'])
  }

  public editedValues(event: any): void {
    console.log(event)
    this.testForm.get('name').setValue(event.name)
    this.testForm.get('password').setValue(event.password)
    this.testForm.get('address.city').setValue(event.address)
  }

}
