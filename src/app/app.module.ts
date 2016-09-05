import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactsHeaderComponent } from './contacts-header';
import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { ContactsService } from './services/contacts.service';

import { ContactsAppRoutes } from './app.routes';

@NgModule({
  declarations: [
    ContactsAppComponent, 
    ContactsHeaderComponent, 
    ContactsListComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(ContactsAppRoutes)
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
