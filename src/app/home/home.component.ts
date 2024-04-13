import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }
  
 
}
