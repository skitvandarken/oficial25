import { Component } from '@angular/core';

@Component({
  selector: 'app-video1',
  standalone: true,
  imports: [],
  templateUrl: './video1.component.html',
  styleUrl: './video1.component.css'
})
export class Video1Component {

  videoURL:string

  constructor() {
    this.videoURL = 'videos/devcamp_promo.mp4';

  }


}
