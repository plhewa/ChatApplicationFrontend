import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SideNaviagtionComponent } from './side-naviagtion/side-naviagtion.component';
import { MessageInputBoxComponent } from './message-input-box/message-input-box.component';
import { MessageListComponent } from './message-list/message-list.component';
import { SubSideNavigationComponent } from './sub-side-navigation/sub-side-navigation.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNaviagtionComponent,
    MessageInputBoxComponent,
    MessageListComponent,
    SubSideNavigationComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ClarityModule,
    HttpClientModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,SideNaviagtionComponent,SubSideNavigationComponent,SubHeaderComponent ]
})
export class AppModule { }
