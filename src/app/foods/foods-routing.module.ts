import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexFoodsComponent } from './index-foods/index-foods.component';

const routes: Routes = [
  {path: '', component: IndexFoodsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
