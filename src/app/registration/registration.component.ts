import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-registration',
  imports: [RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  submitForm(ev : any){
    ev.preventDefault()
  }
  register(event: Event) {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const idNumber = (document.getElementById('idNumber') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const idImage = (document.getElementById('idImage') as HTMLInputElement).files?.[0];
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
    const passwordError = document.getElementById('passwordError');

    // Validate ID Number
    if (!/^\d{14}$/.test(idNumber)) {
      alert('ID must be exactly 14 digits.');
      return;
    }

    // Validate Phone Number
    if (!/^(011|012|010|015)\d{8}$/.test(phone)) {
      alert('Phone number must start with 011, 012, 010, or 015 and be 11 digits long.');
      return;
    }

    // Validate Email
    if (!email.endsWith('@gmail.com')) {
      alert('Email must be a Gmail address.');
      return;
    }

  //   function displayFileName(input) {
  //     const fileName = input.files.length > 0 ? input.files[0].name : "No file chosen";
  //     document.getElementById("file-name").textContent = fileName;
  // }
  

    // Validate Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    if (!passwordRegex.test(password)) {
      passwordError!.textContent = 'Password must be at least 8 characters, include at least one uppercase letter and lowercase letter, at least one number and one special character.';
      return;
    } else {
      passwordError!.textContent = '';
    }

    // Confirm Password
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Successful Submission
    alert('Registration successful!');
    console.log({ username, idNumber, phone, email, idImage, password });
    
  }
}
