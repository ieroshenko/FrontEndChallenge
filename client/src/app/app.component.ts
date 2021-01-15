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

  constructor(private isLoadingService: IsLoadingService) {
    this.isLoading = this.isLoadingService.isLoading$();
  }
}
