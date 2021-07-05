import { Component, OnInit } from '@angular/core';

import { Food } from 'src/app/interfaces/food.interface';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-form-food',
  templateUrl: './form-food.component.html',
  styleUrls: ['./form-food.component.scss']
})
export class FormFoodComponent implements OnInit {
  food:any;

  constructor(private _foods: FoodService) {
    this.food = {}
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const food:Food = {
      name: this.food.name,
      quantity: this.food.quantity,
      department: this.food.department,
    };
    this._foods.arrayListSelect.push(food);
  }

}
