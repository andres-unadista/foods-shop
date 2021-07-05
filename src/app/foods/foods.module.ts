import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodsRoutingModule } from './foods-routing.module';
import { FormFoodComponent } from './form-food/form-food.component';
import { CartFoodsComponent } from './cart-foods/cart-foods.component';
import { IndexFoodsComponent } from './index-foods/index-foods.component';


@NgModule({
  declarations: [
    FormFoodComponent,
    CartFoodsComponent,
    IndexFoodsComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    FormsModule
  ]
})
export class FoodsModule { }
