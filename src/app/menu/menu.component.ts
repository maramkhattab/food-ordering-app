import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems = [{ name: "Pizza", description: "Pizza margherita with cheese and marinara sauce", price: 150, qty: 0, img: "https://www.peoplemagazine.co.za/app/uploads/2017/09/cheese-pizza.jpg" }, { name: "Burger", description: "Cheese burger with tomato and special sauce.", price: 100, qty: 0, img: "https://top10cairo.com/wp-content/uploads/2015/12/best-burger-restaurant-places-in-cairo.jpg" }]
  constructor() { }

  ngOnInit(): void {
  }
  addItem(i: number) {
    this.menuItems[i].qty++;

  }
  removeItem(i: number) {
    if (this.menuItems[i].qty != 0)
      this.menuItems[i].qty--;

  }


}
