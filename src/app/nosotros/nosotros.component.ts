import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements AfterViewInit {
  @ViewChild('videoContainer') videoContainer!: ElementRef;

  ngAfterViewInit() {
    const newContent = `
    <div class="z-index-0" #videoContainer>
      <div data-v-19ea6b67="">
        <video
          class="w-full"
          id="bg-video-loop"
          autoplay
          preload="auto"
          muted
          src="https://raw.githubusercontent.com/Incruises/videos/master/loop-4.mp4?raw=true"
        ></video>
      </div>
    </div>
    `;
    this.videoContainer.nativeElement.innerHTML = newContent;
  }
}
