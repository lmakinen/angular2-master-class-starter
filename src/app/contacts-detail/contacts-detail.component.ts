import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactsService: ContactsService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.contact = this.contactsService.getContact(this.route.snapshot.params['id']);
    this.contactsService.getContact(this.route.snapshot.params['id'])
      .subscribe(contacts => this.contact = contacts);
  }

}