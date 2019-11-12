import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl:'./event-details.components.html',
    styles:[`
        .container{padding-left: 20px; padding-right: 20px;}
        .event-image{height:100px}
    `]
})
export class EventDetailsComponent{
    event:any

    constructor(private eventService:EventService, private route:ActivatedRoute){

    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}