import { MessageService } from './services/message.service';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FunComponent } from './fun/fun.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollegeComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    WorkComponent,
    FunComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'work', component: WorkComponent },
      { path: 'college', component: CollegeComponent },
      { path: 'fun', component: FunComponent },
      { path: 'contact', component: ContactComponent },
    ])
  ],
  providers: [
    MessageService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
