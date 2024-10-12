import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider2',
  standalone: true,
  imports: [],
  templateUrl: './slider2.component.html',
  styleUrl: './slider2.component.css'
})
export class Slider2Component  implements AfterViewInit {
  
  ngAfterViewInit(): void {
    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    const images = sliderInner.innerHTML;

    // Duplicate the images
    sliderInner.innerHTML += images; // Append the same images for a seamless effect
  }
}