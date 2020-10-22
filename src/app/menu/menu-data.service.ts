import { MenuItem } from '../shared/menu-item.model';
export class MenuDataService {
    menuItems: MenuItem[] = [new MenuItem("Pizza", "Mushrooms, Green peppers, Fresh Tomatoes, Onions, and Black Olives Loaded on Marinara Sauce and Topped with Fresh Mozzarella Cheese.", 150, 0, "https://pngimg.com/uploads/pizza/pizza_PNG44043.png"),
    new MenuItem("Burger", "Cheese burger with mushroom and bacon.", 100, 0, "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4159.png"),
    new MenuItem("Grilled Chicken", "Half roasterie chicken.", 70, 0, "https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14091.png"),
    new MenuItem("Steak", "300g of premium grassfed meat", 250, 0, "https://pngimg.com/uploads/steak/steak_PNG85.png"),
    new MenuItem("Mozzarella sticks", "Deep fried mozzarella sticks with our special marinara sauce", 80, 0, "https://pngimg.com/uploads/soup/soup_PNG76.png")
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