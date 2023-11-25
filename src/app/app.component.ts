import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Swiggy-Namaste-Angular';
  isLoggedIn!: boolean;

  networksStatus: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.networkStatus.subscribe((res) => {
      this.networksStatus = res
    });
    this.dataService.loginStatus.subscribe((res) => {
      this.isLoggedIn = res
    });
  }
}
