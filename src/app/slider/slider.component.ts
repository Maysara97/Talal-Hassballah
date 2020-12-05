import { environment } from './../../environments/environment';
import { GettingDataService } from './../getting-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

images = "assets/SliderImage.png"
public myData: any ; //Holding The Whole Data
webSlider: any[]; //Holding The WebSiteSlider Only
SliderFilesPaths = environment

  constructor(private service : GettingDataService) {}


 
  ngOnInit() {
    //Getting Slider Images From The API Get Response
    this.service.getData().subscribe(response => {
      this.myData = response;
      
      this.webSlider = this.myData.data.webSiteSlider;

    });

    
   }
//this function is to change string of image path into real image depending on the path of files 
//in the environment.ts
   getFilePath(fileName: string): string {
    return `${this.SliderFilesPaths.filePath}${fileName}`;
  }
}
