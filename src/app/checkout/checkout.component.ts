import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/menu-item.model';
import { MenuDataService } from "../menu/menu-data.service"

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: MenuItem[];
  constructor(private mdService: MenuDataService) { }

  ngOnInit(): void {
    this.cartItems = this.mdService.getCartItems();

  }
  checkout() {
    console.log("ana hena");
    let total: number = 0;
    this.cartItems.forEach(item => {
      total += (item.quantity * item.price);
    })
    alert("your total is " + total);
  }
}


