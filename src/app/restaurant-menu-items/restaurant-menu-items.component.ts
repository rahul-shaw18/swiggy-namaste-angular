import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './../Services/data-service';

@Component({
  selector: 'app-restaurant-menu-items',
  templateUrl: './restaurant-menu-items.component.html',
  styleUrls: ['./restaurant-menu-items.component.scss'],
})
export class RestaurantMenuItemsComponent implements OnInit {
  @Input() menuItems: any;
  imageUrl: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMenuItemImage(this.menuItems?.card?.info?.imageId).subscribe(
      (res: any) => (this.imageUrl = res),
      (err:any) => this.imageUrl = err.url
    );
  }
}
