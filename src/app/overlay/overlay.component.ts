import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  OverLayText = "FOOD<br />AND<br />BEVERGE<br />SERVICES";
  
  constructor() { }

  ngOnInit(): void {
  }

}
