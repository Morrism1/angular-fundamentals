import { Component,Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';


@Component({
    selector:'event-thumbnail',
    template:`
    <div class='well hoverwell thumbnail'>
    <h1>{{event.name}}</h1>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
    <span>Location: {{event.location.address}}</span>
    <span class='pad-left'>{{event.location.city}},{{event.location.country}}</span>
    
    </div>

    </div>`,
    styles: [
        `
        .pad-left {margin-left: 10px;}
        .well div{color: #bbb;}
        `
    ]
})

export class EventThumbnailComponent{
   @Input() event:any
}