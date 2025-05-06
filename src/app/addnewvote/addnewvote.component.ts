import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-addnewvote',
  imports: [RouterLink, CommonModule],
  templateUrl: './addnewvote.component.html',
  styleUrl: './addnewvote.component.css'
})
export class AddnewvoteComponent {

  options: string[] = ['']; // Start with one input

  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Goes one step back in history
  }


  addOption() {
    this.options.push(''); // Add another empty option
  }

  
  submitForm(ev : any){
    ev.preventDefault()
  }

  updateOption(index: number, value: string) {
    this.options[index] = value;
  }

}
