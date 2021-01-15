import { Component } from '@angular/core';
import {Observable} from "rxjs";
import { IsLoadingService } from "@service-work/is-loading";
import {JpPreloadService} from "@jaspero/ng-image-preload";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Top 100 Albums';
  isLoading: Observable<boolean> | undefined;

  constructor(private isLoadingService: IsLoadingService, private preload: JpPreloadService) {
    this.preload.initialize();
    this.isLoading = this.isLoadingService.isLoading$();
  }
}
