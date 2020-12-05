import { environment } from './../../environments/environment';
import { GettingDataService } from './../getting-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  FilesPaths = environment
  //Array Holding All Images In About Us Sections
  aboutImages:[];
 
  AboutUsText: string;
  // //Third row properties
  ThirdRowImage:string ;
  // //Fourth row properties
  LeftText  ;
  RightText; 

  // //Fifth row properties
  LastLargeImage ;

  myProjectData; // Holding All Data In The Project API
  myWebSiteData; // Holding All Data In The Website API
  largeImage: any; // The Last Large Image In About Us
  constructor(private service: GettingDataService) { }

  // Get Data From API And Fill My Varribles
  ngOnInit(): void {
    this.service.getProjectData("https://api.wm.bbdv.xyz/api/Project/ProjectsByDoamin/talal.com")
    .subscribe(response=>{
      this.myProjectData = response;
      this.myProjectData = this.myProjectData.data[0]
      this.AboutUsText = this.myProjectData.description;
      this.aboutImages = this.myProjectData.images;
      this.ThirdRowImage  = this.myProjectData.coverImage;
        console.log(this.ThirdRowImage);

      this.service.getData().subscribe(response => {
        this.myWebSiteData = response;
        this.myWebSiteData = this.myWebSiteData.data.aboutList[0];
        this.LeftText = this.myWebSiteData.title;
        this.RightText = this.myWebSiteData.description;
        this.LastLargeImage = this.myWebSiteData.imageFile;
        
      });
      
    });
  }

  //This Image Is For Changing Image File Path Into real image depending on the 
  //files path of files in the environment
  getFilePath(fileName: string): string {
    return `${this.FilesPaths.filePath}${fileName}`;
  }

}
