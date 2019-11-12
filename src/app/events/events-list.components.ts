import { Component, OnInit } from "@angular/core";
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

declare let toastr
@Component({
  template: `
    <div>
      <h1>Upcoming Events Angular events</h1>
      <hr />
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
    </div>
      </div>

  `
})
export class EventsListComponent implements OnInit{
  events:any 
  constructor(private eventservice:EventService, private toastr:ToastrService,
    private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  //this.eventservice.getEvents().subscribe(events =>{this.events = events} )
 this.events = this.route.snapshot.data['events'] 
}

handleThumbnailClick(eventName){
  this.toastr.success(eventName)

}

}
