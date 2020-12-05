import { environment } from './../../environments/environment';
import { GettingDataService } from './../getting-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service : GettingDataService) { }

  filePath = environment

  //The Text Under The Logo In The Footer.
  FooterText ;

  //function to navigate between sections [used in the quick links as on the navbar]
  NavigateToSection(section: string){
    window.location.hash = section;
  }

Email ;
socialLinks;
FacebookLink = "#";
InstagramLink = "#";
YoutubeLink = "#";
  
footerData;
  ngOnInit(): void {
    this.service.getData().subscribe(response =>{
      this.footerData = response;
      this.footerData = this.footerData.data;
       this.FooterText = this.footerData.aboutUs;
       // get email of talal hassballah
       this.Email = this.footerData.contactUS[0].email;
       //get social media links
       this.socialLinks = this.footerData.webSiteSocialMedia;
       this.FacebookLink= this.socialLinks[0].socialLink
       this.InstagramLink = this.socialLinks[3].socialLink
       this.YoutubeLink = this.socialLinks[4].socialLink
    });
  }

}
