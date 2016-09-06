import { ContactsListComponent } from './contacts-list';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorComponent } from './contacts-editor';
import { Routes } from '@angular/router';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailViewComponent },
  { path: 'contact/:id/edit', component: ContactsEditorComponent }
]