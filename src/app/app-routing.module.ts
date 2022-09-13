import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import('./ecommerce-website/home/feature/home-shell.module').then(
				(m) => m.HomeShellModule
			),
	},
	{
		path: "home",
		loadChildren: () =>
			import('./ecommerce-website/home/feature/home-shell.module').then(
				(m) => m.HomeShellModule
			),
	},
	{
		path: 'product',
		loadChildren: () =>
			import('./ecommerce-website/product/feature/product-shell.module').then(
				(m) => m.ProductShellModule
			),
	},
	{
		path: "**",
		redirectTo: ""
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
