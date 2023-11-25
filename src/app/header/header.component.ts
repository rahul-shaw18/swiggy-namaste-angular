import { Component, HostListener } from '@angular/core';
import { LOGO_URL } from './../utils/constants';
import { DataService } from './../Services/data-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn!: boolean;
  companyLogo = LOGO_URL;
  online = navigator.onLine;

  headerList = [
    { id: 0, displayName: 'Home', routeTo: '', isSelected: true },
    { id: 0, displayName: 'About Us', routeTo: 'about', isSelected: false },
    { id: 0, displayName: 'Contact Us', routeTo: 'contact', isSelected: false },
    { id: 0, displayName: 'Card', routeTo: 'card', isSelected: false },
  ];

  constructor(private dataService: DataService) {}

  @HostListener('window:online')
  onOnline() {
    this.online = true;
    this.dataService.networkStatus.next(this.online);
  }

  @HostListener('window:offline')
  onOffline() {
    this.online = false;
    this.dataService.networkStatus.next(this.online);
  }

  onRouterLinkActive(e: any, list: any) {
    this.headerList.map((l: any) => (l.isSelected = e));
  }

  onLogin() {
    this.isLoggedIn = !this.isLoggedIn
    this.dataService.loginStatus.next(this.isLoggedIn)
  }
}
