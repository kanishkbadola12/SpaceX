import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {
  name: string;
  message: string;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParamMap.subscribe(
      (params) => {
        this.name = params.get('name');
        this.message = params.get('message');
      }
    )
  }
}
