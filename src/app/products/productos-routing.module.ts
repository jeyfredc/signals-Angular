import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product', component: ProductPageComponent },
      { path: '**', redirectTo: 'product' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
