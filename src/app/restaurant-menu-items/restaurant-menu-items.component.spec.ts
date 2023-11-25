import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuItemsComponent } from './restaurant-menu-items.component';

describe('RestaurantMenuItemsComponent', () => {
  let component: RestaurantMenuItemsComponent;
  let fixture: ComponentFixture<RestaurantMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantMenuItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
