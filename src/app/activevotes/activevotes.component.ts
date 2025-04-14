import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-activevotes',
  imports: [RouterLink],
  templateUrl: './activevotes.component.html',
  styleUrl: './activevotes.component.css'
})
export class ActivevotesComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Goes one step back in history
  }

}
