import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component {
  constructor(private router: Router) { }
  navigate() {
    this.router.navigate(['/cmp2'],
    {
      queryParams: {
        name: 'cmp1',
        message: 'hey cmp2!'
      }
    })
  }
}
