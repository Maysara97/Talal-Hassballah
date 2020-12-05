import { GettingDataService } from './../getting-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';


@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private service: GettingDataService) {}

  RequestText= "Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with ‘real’ content. This is required when, for example, the final text is not yet available.";

  //--------> FORM Validation

  MyForm = new FormGroup({
    'Name' : new FormControl("", Validators.required),
    'Email' : new FormControl("",Validators.required),
    'PhoneNumber' : new FormControl("",Validators.required),
    'Message' : new FormControl("",Validators.required)
  });
  
 //return the name of the field to render an error specific for this field 
GetObject(objectName){
  return this.MyForm.get(objectName);
}

//Getting all form values from MyForm and cast it into one string and send it to the api
//after clicking submit button 
postFormData(input : HTMLInputElement){
  let val = {

    webSiteDomain : "talal.com",
    formContent : JSON.stringify(input),
    formType : "Form"
  }
  //send the values of form to the serice formPost func. to send data to api and then
  //print success message in the console after success sending to API.
  this.service.formPost(val) 
  .subscribe(response => {
    console.log("========================"); 
    console.log("Form Submitted Succefully...");
    console.log("========================");
  });

}



  ngOnInit(): void {
    
  }

}
