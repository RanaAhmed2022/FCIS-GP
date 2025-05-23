import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addnewvote',
  imports: [RouterLink],
  templateUrl: './addnewvote.component.html',
  styleUrl: './addnewvote.component.css'
})
export class AddnewvoteComponent {
  submitForm(ev : any){
    ev.preventDefault()
  }

  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Goes one step back in history
  }
}
