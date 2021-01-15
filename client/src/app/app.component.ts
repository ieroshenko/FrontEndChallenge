import { Component } from '@angular/core';
import {Observable} from "rxjs";
import { IsLoadingService } from "@service-work/is-loading";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Top 100 Albums';
  isLoading: Observable<boolean> | undefined;
  preloadedImages:any[] = new Array()

  constructor(private isLoadingService: IsLoadingService) {
    this.isLoading = this.isLoadingService.isLoading$();
    this.preload(
      "../assets/heart_red.png",
      "../assets/heart_white.png");
  }

  preload(...args: any[]):void {
    for (let i = 0; i < args.length; i++) {
      this.preloadedImages[i] = new Image();
      this.preloadedImages[i].src = args[i];
    }
  }
}
