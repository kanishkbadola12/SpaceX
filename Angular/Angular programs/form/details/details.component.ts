import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() formValues: any;
  @Output() newFormValues = new EventEmitter<any>();
  addressValue: string;
  detailsForm: FormGroup;
  constructor(private router: Router) {
    this.detailsForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      address: new FormControl('')
    })
   }

  ngOnInit() {
    this.detailsForm.get('name').setValue(this.formValues.name);
    this.detailsForm.get('password').setValue(this.formValues.password);
    this.detailsForm.get('address').setValue(this.formValues.address.city + this.formValues.address.state);
  }
  public edit(): void {
    this.newFormValues.emit(this.detailsForm.value);
    this.router.navigate(['/form'],
    // {queryParams: {name:  'detailsComponent'}}
    )
  }

}
