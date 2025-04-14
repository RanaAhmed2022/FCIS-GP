import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-voteshistory',
  imports: [RouterLink],
  templateUrl: './voteshistory.component.html',
  styleUrl: './voteshistory.component.css'
})
export class VoteshistoryComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Goes one step back in history
  }

}
