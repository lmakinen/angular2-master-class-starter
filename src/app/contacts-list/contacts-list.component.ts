import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
   // this.contacts = contactsService.getContacts();
  }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);

    this.terms$.debounceTime(400)
               .distinctUntilChanged()
               .subscribe(term => this.search(term));
  }

  search(term) {
    this.contactsService.search(term)
      .subscribe(contacts => this.contacts = contacts);
  }

}
