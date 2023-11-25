import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CON_URL, MENU_API, RESTAURANT_API } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  networkStatus = new BehaviorSubject<boolean>(true);
  loginStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getAllRestaurant() {
    return this.http.get(RESTAURANT_API);
  }

  getRestaurantImage(id: any) {
    return this.http.get(CON_URL + id);
  }

  getRestaurantMenu(restaurantId: any) {
    return this.http.get(MENU_API + restaurantId);
  }
  getMenuItemImage(imageId: any) {
    return this.http.get(CON_URL + imageId);
  }
}
