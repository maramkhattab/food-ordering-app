import { MenuItem } from '../shared/menu-item.model';
import { EventEmitter, Injectable } from '@angular/core';



export class MenuDataService {
    menuItems: MenuItem[] = [new MenuItem("Pizza", "Pizza margherita with cheese and marinara sauce", 150, 0, "https://www.peoplemagazine.co.za/app/uploads/2017/09/cheese-pizza.jpg"),
    new MenuItem("Burger", "Cheese burger with mushroom and bacon.", 100, 0, "https://top10cairo.com/wp-content/uploads/2015/12/best-burger-restaurant-places-in-cairo.jpg"),
    new MenuItem("Chicken ceasar salad", "Iceberg lettuce, grilled chicken breast and ceasar sauce", 60, 0, "https://i2.wp.com/mygorgeousrecipes.com/wp-content/uploads/2019/01/Grilled-Chicken-Caesar-Salad-with-Heatlhy-Yogurt-Dressing-6.jpg"),
    new MenuItem("Steak", "300g of premium grassfed meat", 250, 0, "https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/05/testkitchen_argentinesteak.jpg?resize=1280%2C%20560&ssl=1"),
    new MenuItem("Mozzarella sticks", "Deep fried mozzarella sticks with our special marinara sauce", 80, 0, "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_700/https://thefoodcafe.com/wp-content/uploads/2018/04/Mozzarella-Sticks-5.jpg")
    ]
    getMenuItems() {
        return this.menuItems;
    }
    increaseItemQuantity(i: number) {

        this.menuItems[i].quantity++;
    }
    decreaseItemQuantity(i: number) {
        if (this.menuItems[i].quantity != 0)
            this.menuItems[i].quantity--;


    }
    getCartItems() {
        return this.menuItems.filter(item => { if (item.quantity > 0) return item }).slice()
    }

}