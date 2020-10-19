import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [new Item('Pizza', 150, 2, 'https://www.moulinex.com.eg/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbXxoNjIvaDE5LzEzMTExNzcxNTI5MjQ2LmJpbnw3NTkwMmNjYmFhZTUwZjYwNzk0ZmQyNjVmMjEzYjZiNGI3YzU1NGI3ZGNjYjM3YjYxZGY5Y2Y0ZTdjZmZkZmNj'),
  new Item('Burger', 100, 1, 'https://top10cairo.com/wp-content/uploads/2015/12/best-burger-restaurant-places-in-cairo.jpg')]
  constructor() { }

  ngOnInit(): void {
  }

}
