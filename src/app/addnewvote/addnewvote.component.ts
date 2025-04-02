import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
