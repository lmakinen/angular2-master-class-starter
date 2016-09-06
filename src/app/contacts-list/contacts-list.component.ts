import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Title } from '@angular/platform-browser';
import { ContactsService } from '../services/contacts.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(
    private contactsService: ContactsService,
    private eventBusService: EventBusService,
    private titleService: Title
    ) {
  }

  ngOnInit() {

    this.contacts = this.contactsService.search(this.terms$)
                                        .merge(this.contactsService.getContacts());

    this.eventBusService.emit('appTitleChange', 'Contact list');
    this.titleService.setTitle('Contacts');

  }
}
