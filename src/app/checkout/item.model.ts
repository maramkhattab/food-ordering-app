export class Item {
    public name: string;
    public quantity: number;
    public price: number;
    public imagePath: string;

    constructor(name: string, price: number, quantity: number, imagePath: string) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.imagePath = imagePath;
    }
}
