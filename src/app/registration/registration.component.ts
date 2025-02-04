import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-registration',
  imports: [RouterLink],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  // Use index signature to allow dynamic property access
  formData: { [key: string]: string | File | null } = {
    idPhoto: null,
    fullName: '',
    nationalId: '',
    phoneNumber: '',
    personalPhoto: null
  };

  submissionMessage: string | null = null; // To store the message

  // Handle file input changes
  onFileChange(event: any, field: keyof typeof this.formData) {
    const file = event.target.files[0];
    this.formData[field] = file;
  }

  // Handle text input changes
  onInputChange(event: any, field: keyof typeof this.formData) {
    const value = event.target.value;
    this.formData[field] = value;
  }

  // Handle form submission
  onSubmit(event: Event) {
    event.preventDefault();
    this.submissionMessage =
      'It will spend for about 2 days to verify your identity, please wait';
  }


  onRegisterClick() {
    // Get the verification message element by its ID
    const verificationMessage = document.getElementById('verificationMessage');

    if (verificationMessage) {
      // Show the verification message
      verificationMessage.style.display = 'block';
    }
  }


}
