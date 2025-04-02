import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  submitForm(ev : any){
    ev.preventDefault()
  }

  register(event: Event) {
    event.preventDefault();
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    if (!/^(011|012|010|015)\d{8}$/.test(phone)) {
      alert('Phone number must start with 011, 012, 010, or 015 and be 11 digits long.');
      return;
    }

    // Validate Email
    if (!email.endsWith('@gmail.com')) {
      alert('Email must be a Gmail address.');
      return;
    }

    // Successful Login
    alert('Login successful!');
    console.log({phone, email});
  }

}
