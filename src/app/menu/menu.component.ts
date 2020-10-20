import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/menu-item.model';
import { MenuDataService } from "./menu-data.service"
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[];
  constructor(private mdService: MenuDataService) { }

  ngOnInit(): void {
    this.menuItems = this.mdService.getMenuItems();
  }
  addItem(i: number) {
    this.mdService.increaseItemQuantity(i);
    console.log(this.mdService.getCartItems())
  }
  removeItem(i: number) {
    this.mdService.decreaseItemQuantity(i);
  }


}
