import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component({
    template:`
    <h1>New event</h1>
    <hr>
    <div class="col-md-5">
    <h3>[Create form will go here]</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="submit" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})

export class CreateEventsComponents{
    constructor(private router:Router){

    }
    cancel(){
        this.router.navigate(['/events'])
    }
}