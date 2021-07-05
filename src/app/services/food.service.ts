import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  arrayListSelect: Food[] = [];
  arrayShoppingList: Food[] = [];

  constructor() { }

  deleteFoodList(list: Food[], index: number) {
    list.splice(index, 1);
  }

}
