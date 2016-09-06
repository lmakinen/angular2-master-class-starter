import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContactsHeaderComponent } from './contacts-header';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

import { ContactsService } from './services/contacts.service';

import { ContactsAppRoutes } from './app.routes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

@NgModule({
  declarations: [
    ContactsAppComponent, 
    ContactsHeaderComponent, 
    ContactsListComponent, 
    ContactsDetailComponent, 
    ContactsEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
