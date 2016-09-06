import { Component, OnInit } from '@angular/core';
import { ContactsHeaderComponent } from './contacts-header';
import { EventBusService } from './services/event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [ContactsHeaderComponent]
})

export class ContactsAppComponent implements OnInit {
  title: string;

  constructor(
    private _eventBusService: EventBusService
  ) {}
  ngOnInit() {
    this._eventBusService.observe('appTitleChange')
                          .subscribe(title => this.title = title )
  }

}
