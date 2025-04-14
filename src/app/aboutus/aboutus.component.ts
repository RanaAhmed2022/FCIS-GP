import { Component, OnInit, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit{
  constructor(private location: Location, private el: ElementRef, private renderer: Renderer2) {}

  goBack() {
    this.location.back(); // Goes one step back in history
  }

  @ViewChild('scrollTopButton', { static: true }) btn!: ElementRef;
    
  
    ngOnInit(): void {
      const menuToggle = document.querySelector(".menu-toggle") as HTMLElement | null;
      const nav = document.querySelector("header nav") as HTMLElement | null;
      const btn = this.el.nativeElement.querySelector('.btn');
  
       // Mobile Menu Toggle
      if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
          nav.classList.toggle("active");
        });
      }
  
  
  
       // Scroll Event Handling
  
      this.renderer.listen(window, 'scroll', () => {
        if (nav && btn) {
          if (window.scrollY >= 250) {
            this.renderer.removeClass(nav, 'navdefault');
            this.renderer.addClass(nav, 'navscroll');
            this.renderer.setStyle(btn, 'display', 'block');
          } else {
            this.renderer.addClass(nav, 'navdefault');
            this.renderer.removeClass(nav, 'navscroll');
            this.renderer.setStyle(btn, 'display', 'none');
          }
        }
          
      })
  
      // Scroll to Top Button
      if (btn) {
        this.renderer.listen(btn, 'click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
  
      }
    
  
    }
}
