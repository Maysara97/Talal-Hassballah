import { environment } from './../../environments/environment';


import { GettingDataService } from './../getting-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {
  FilesPaths = environment;

  // OurServiceText ;
  // ImageBesideOurServiceText ;
  // OurServiceLastImage = "assets/Images/OurServicesLast.png";
  coverImages; // Last Large Image In Our Services

  constructor(private service:GettingDataService) { }

  serviceData; //Holding All Data From Service API
  ngOnInit(): void {
    this.service.getServiceData("https://api.wm.bbdv.xyz/api/Service/ServicesByDoamin/talal.com")
    .subscribe(response => {
      this.serviceData = response;
      this.serviceData = this.serviceData.data;
     
      this.coverImages= this.serviceData.images;
    
    });
  }

  getFilePath(fileName: string): string {
    return `${this.FilesPaths.filePath}${fileName}`;
  }

}
