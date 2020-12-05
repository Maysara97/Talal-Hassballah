import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { OverlayComponent } from './overlay/overlay.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { RequestComponent } from './request/request.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GettingDataService } from './getting-data.service';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { MyAppComponent } from './my-app/my-app.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SliderComponent,
    OverlayComponent,
    AboutUsComponent,
    OurServiceComponent,
    RequestComponent,
    FooterComponent,
    SubmitFormComponent,
    MyAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([{
      path : 'submit',
      component: SubmitFormComponent 
    },
  {
    path: '',
    component: MyAppComponent
  },
{
    path: 'home',
    component: MyAppComponent
}])
    

    
  ],
  providers: [
    GettingDataService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
