import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../Services/data-service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss'],
})
export class RestaurantMenuComponent implements OnInit {
  restaurantDetails: any;
  restaurantMenu: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    let restaurantId = this.route.snapshot.paramMap.get('id');
    this.getRestaurantMenu(restaurantId);
  }

  getRestaurantMenu(restaurantId: any) {
    this.dataService.getRestaurantMenu(restaurantId).subscribe((res: any) => {
      this.restaurantDetails = res?.data?.cards[0]?.card?.card?.info;

      this.restaurantMenu =
        res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      this.restaurantMenu = this.restaurantMenu
        .filter(
          (restaurant: any) =>
            restaurant.card.card['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )
        .map((restaurant: any, index: number) => ({
          ...restaurant,
          isSelected: false,
          id: index,
        }));
      console.log(this.restaurantMenu);
    });
  }

  toggleCategorySelection(category: any) {
    this.restaurantMenu = this.restaurantMenu.map((item: any) => {
      if (item.id === category.id && !category.isSelected) {
        return {
          ...item,
          isSelected: true,
        };
       } else {
        return {
          ...item,
          isSelected: false,
        };
      }
    });
  }
}
