import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  contact: Contact = <Contact>{ address: {}};

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
      .subscribe(contacts => this.contact = contacts);
  }

  private goToDetails (contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  cancel (contact: Contact) {
    this.goToDetails(contact);
  }

  save (contact: Contact) {
    this.contactsService.updateContact(this.contact)
      .subscribe(response => this.goToDetails(contact));
  }

}
