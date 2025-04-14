import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personalinfo',
  imports: [RouterLink],
  templateUrl: './personalinfo.component.html',
  styleUrl: './personalinfo.component.css'
})
export class PersonalinfoComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Goes one step back in history
  }

}
