import { Component, Inject, PLATFORM_ID, afterRender } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId:Object){
    this.platformId = platformId;
    if(isPlatformBrowser(platformId)){
      // runs on client / browser
    }
    if(isPlatformServer(platformId)){
      // runs on server / node
    }  
  } 

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      console.log("Output is generated only in browser not in server.");
    }
    if(isPlatformServer(this.platformId)){
      console.log("Output is generated only in server not in browser.");
    }
  }
}