import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'About', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'Product/:id', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
