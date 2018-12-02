import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {
  page:number=1;
  @Input() hasMore:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
