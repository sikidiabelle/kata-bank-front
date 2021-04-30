import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountService} from './common/services/account.service';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { HomeComponent } from './common/components/home/home.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { DepotComponent } from './components/depot/depot.component';
import { RetraitComponent } from './components/retrait/retrait.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DepotComponent,
    RetraitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
