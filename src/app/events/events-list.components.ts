import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Events Angular events</h1>
      <hr />
      <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Angular connect",
    date: "9/12/2019",
    time: "10:00 AM",
    price: 599.0,
    imageUrl: "/assets/images/angularconnect-shield.png",
    location: {
      address: "1057 DT",
      city: "London",
      country: "England"
    }
  };
}
