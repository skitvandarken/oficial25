import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiovisual',
  standalone: true,
  imports: [],
  templateUrl: './audiovisual.component.html',
  styleUrl: './audiovisual.component.css'
})

export class AudiovisualComponent implements OnInit {

  ngOnInit(): void {
    this.setPlaysInlineForVideo();
  }

  setPlaysInlineForVideo(): void {
    const video = document.getElementById('backgroundVideo') as HTMLVideoElement;

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