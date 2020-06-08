import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RealmComponent } from './realm/realm.component';
import { RealmDetailComponent } from './realm-detail/realm-detail.component';

import { MessageComponent } from './message/message.component';
import { RealmSearchComponent } from './realm-search/realm-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RealmComponent,
    RealmDetailComponent,
    MessageComponent,
    DashboardComponent,
    RealmSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
