import { Component, OnInit, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @ViewChild('scrollTopButton', { static: true }) btn!: ElementRef;
  


  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
