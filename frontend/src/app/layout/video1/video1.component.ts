import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-video1',
  standalone: true,
  imports: [],
  templateUrl: './video1.component.html',
  styleUrls: ['./video1.component.css']
})
export class Video1Component implements OnInit {

  ngOnInit(): void {
    this.setPlaysInlineForVideo();
  }

  setPlaysInlineForVideo(): void {
    const video = document.getElementById('promoVideo') as HTMLVideoElement;

    if (video) {
      // Force inline play on supported mobile devices
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');

      // Handle iOS fullscreen video issue
      video.addEventListener('loadedmetadata', () => {
        if (video.paused) {
          video.play().catch((error) => console.error('Autoplay failed:', error));
        }
      });
    }
  }
   }