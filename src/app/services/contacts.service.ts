import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'http://localhost:4201/api';

  title: string;

  constructor(private http: Http) {

  }

  getContact(id: number | string) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
      .map(res =>  res.json().item);
  }

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map(res =>  res.json())
      .map(data => data.items);
  }
  updateContact(contact: Contact) {
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact);
  }

  rawSearch(term: string) {
    return this.http.get(`${this.API_ENDPOINT}/search?text=${term}`)
      .map(res =>  res.json())
      .map(data => data.items);
  }

  search(term: Observable<string>, debounceMs = 400) {
    return term.debounceTime(debounceMs)
               .distinctUntilChanged()
               .switchMap(term => this.rawSearch(<string>term))

  }



}
