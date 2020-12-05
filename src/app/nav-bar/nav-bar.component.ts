import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{



InnerWidth: number ;
//bollean var to check if this is time to collabse or not
CollabseKey = true;

// start detecting the size of the screen and changing the value of collabse key
@HostListener('window:resize', ['$event'])
onResize() {
  this.InnerWidth = window.innerWidth;
  if (this.InnerWidth < 769){
    this.CollabseKey = false;
  }
  else{
    this.CollabseKey = true;
  }
}

// here starting to detect if the collabse button is clicked or not to expand navbar
ButtonKey = false;
ButtonClick(){
    if (this.ButtonKey === false){
      this.ButtonKey = true;
      document.getElementById("NavBarItemsSmall").style.display = "none"
    }
    this.ButtonKey = false;
    document.getElementById("NavBarItemsSmall").style.display = "block"
}

// this function is used to navigate between sections in the landing page by section ID
NavigateToSection(section: string){
  window.location.hash = section;
}

ngOnInit(){
  this.onResize()
}

  constructor() {}

}
