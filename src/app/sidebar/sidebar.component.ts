import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    haschild:boolean;
    subtitle:string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', haschild:false , subtitle:"",  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Profile', haschild:false , subtitle:"",  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Job Board', haschild:true , subtitle:" job Apply ",  icon: 'pe-7s-graph', class: '' },

    // { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    // { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    
    // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  panelOpenState = false;

  constructor() { }

  btnClick= function () {
    this.router.navigateByUrl('/jobmainboard');
};

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
