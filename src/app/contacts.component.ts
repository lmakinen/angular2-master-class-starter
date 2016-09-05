import { Component } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';
import { Contact } from './models/contact'
import { CONTACT_DATA } from './data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactsHeaderComponent]
})
export class ContactsAppComponent {

  contacts: Contact[] = CONTACT_DATA;
}
