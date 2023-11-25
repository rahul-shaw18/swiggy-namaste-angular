import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './../Services/data-service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: any
  restaurantImage:string=''

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getRestaurantImage(this.restaurant.cloudinaryImageId).subscribe((res: any) => {
      this.restaurantImage = res
    }, (err: any) => {
      this.restaurantImage =err.url

    })
  }
  
}
