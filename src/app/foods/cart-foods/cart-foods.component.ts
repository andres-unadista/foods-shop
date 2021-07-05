import { Component, Input, OnInit } from '@angular/core';

import { Food } from 'src/app/interfaces/food.interface';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-cart-foods',
  templateUrl: './cart-foods.component.html',
  styleUrls: ['./cart-foods.component.scss'],
})
export class CartFoodsComponent implements OnInit {
  @Input() typeList: any;
  titleList: string = '';
  titleButton: string = '';
  listFoods: Food[] = [];

  constructor(private _foods: FoodService) { }

  ngOnInit(): void {
    this.showTitleAndList();
  }

  showTitleAndList() {
    if (this.determineList() === 1) {
      this.assignList(this._foods.arrayListSelect);
      this.titleList = 'Añadido';
      this.titleButton = 'Comprar';
    }
    if (this.determineList() === 2) {
      this.assignList(this._foods.arrayShoppingList);
      this.titleList = 'Comprado';
      this.titleButton = 'Quitar';
    }
  }

  determineList(): number {
    if (this.typeList == 'select') {
      return 1;
    } else if (this.typeList == 'shop') {
      return 2;
    }
    return 0;
  }

  assignList(list: Food[]) {
    this.listFoods = list;
  }

  onClickButton(index: number) {
    if (this.determineList() === 1) {
      const food = this.listFoods[index];
      this._foods.arrayShoppingList.push(food);
      this._foods.deleteFoodList(this._foods.arrayListSelect, index);
    }
    if (this.determineList() === 2) {
      this._foods.deleteFoodList(this._foods.arrayShoppingList, index);
    }
  }
}
