import { ContactsListComponent } from './contacts-list';
import { ContactsDetailViewComponent } from './contacts-detail-view';
import { ContactsEditorComponent } from './contacts-editor';
import { AboutComponent } from './about/about.component';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { Routes } from '@angular/router';

export const ContactsAppRoutes: Routes = [
  {
    path: '',
    component: ContactDashboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0' },
      { path: 'contact/:id', component: ContactsDetailViewComponent },
      { path: 'contact/:id/edit', component: ContactsEditorComponent },
    ]
  },
  { path: 'about', component: AboutComponent }
]