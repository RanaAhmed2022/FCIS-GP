import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ThirdwebSDK } from '@thirdweb-dev/sdk/evm';
import { ethers } from 'ethers';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent implements AfterViewInit {



  walletAddress: string = '';

  async connectWithMetaMask() {
    try {
      const win = window as any;

      // تأكد إن MetaMask موجودة
      if (!win.ethereum) {
        alert('Please Download MetaMask first');
        return;
      }

      const provider = new ethers.providers.Web3Provider(win.ethereum);

      // افتح محفظة MetaMask
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // خزن العنوان في المتغير
      this.walletAddress = address;

      // Thirdweb SDK
      const sdk = new ThirdwebSDK(signer);

      console.log("Wallet Connecet:", address);

    } catch (err: any) {
      console.error("There is an error in MetaMask:", err.message || err);
    }
  }




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
