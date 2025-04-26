import { Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements AfterViewInit {

  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  photo: string | null = null;
  isPhotoCaptured = false;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        console.log('Webcam stream acquired');
        this.video.nativeElement.srcObject = stream;
      })
      .catch((err) => {
        console.error('Error accessing webcam:', err);
      });
  }

  photoCaptured = false;
  capturePhoto(): void {
    this.photo = null;
    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
  
    if (!context) return;
  
    video.pause();
  
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
    this.photo = canvas.toDataURL('image/png');
    this.photoCaptured = true; // ✅ Switch to "Try Again" state
  }

  tryAgain(): void {
    this.photo = null;
    this.photoCaptured = false;
    this.video.nativeElement.play(); // ✅ Resume video stream
  }

  submitForm(ev : any){
    ev.preventDefault()
  }

  

}
