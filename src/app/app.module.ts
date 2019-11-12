import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from './events/events-list.components';
import { EventThumbnailComponent } from './events/event-thumbnail.components';
import { NavBarComponents } from './nav/navbar.components';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.components';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventsComponents } from './events/create-events.components';
import { Error404Component } from './errors/404.components';
import { EventRouterActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
  declarations: [EventsAppComponent,
  EventsListComponent,EventThumbnailComponent,EventDetailsComponent,NavBarComponents,CreateEventsComponents,Error404Component],
  providers:[EventService,ToastrService,EventRouterActivator,EventListResolver],
  exports:[RouterModule],

  bootstrap: [EventsAppComponent]
})
export class AppModule {}
