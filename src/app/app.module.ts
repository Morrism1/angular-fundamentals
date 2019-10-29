import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.components';
import { NavBarComponents } from './nav/navbar.components';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent,
  EventsListComponent,EventThumbnailComponent,NavBarComponents],

  bootstrap: [EventsAppComponent]
})
export class AppModule {}
