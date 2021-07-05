import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    FoodsRoutingModule
  ]
})
export class FoodsModule { }
