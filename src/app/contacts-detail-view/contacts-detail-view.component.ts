import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;

  constructor(
     private contactsService: ContactsService, 
     private route: ActivatedRoute,
     private router: Router
  ) { }

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
      .subscribe(contacts => this.contact = contacts);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['contact', contact.id, 'edit']);
  }

  navigateToList() {
    this.router.navigate(['/']);
  }

}