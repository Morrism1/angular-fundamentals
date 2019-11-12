import { Routes} from '@angular/router'
import { EventDetailsComponent } from './events/event-details/event-details.components';
import { EventsListComponent } from './events/events-list.components';
import { CreateEventsComponents } from './events/create-events.components';
import { Error404Component } from './errors/404.components';
import { EventRouterActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

export const appRoutes:Routes = [
    {path:'events/new', component: CreateEventsComponents},
    {path:'events', component: EventsListComponent, resolve:{events:EventListResolver}},
    {path:'event/:id', component:EventDetailsComponent, canActivate:[EventRouterActivator]},
    {path:'404', component: Error404Component},
    {path:'', redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:'./user/user.module#UserModule'}
]