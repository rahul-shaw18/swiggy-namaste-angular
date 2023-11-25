import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './../Services/data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  restaurantList: any;
  subscription: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService
      .getAllRestaurant()
      .subscribe((res: any) => {
        this.restaurantList =
          res.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
