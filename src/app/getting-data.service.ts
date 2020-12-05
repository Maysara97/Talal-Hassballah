import { stringify } from 'querystring';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GettingDataService {
 
MyUrl = environment;
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`${this.MyUrl.ApiUrl}/WebSite/GetByDomain/${this.MyUrl.domain}`);
  }

  getProjectData(projectsUrl){
    return this.http.get(projectsUrl);
  }

  getServiceData(serviceUrl){
    return this.http.get(serviceUrl);
  }

  formPost(value){
    return this.http.post(`${this.MyUrl.ApiUrl}/Form`,value);
  }
}
