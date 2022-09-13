import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShellRoutingModule } from './product-shell-routing.module';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// import components
import { ProductCardComponent } from '../ui/product-card/product-card.component';
import { ProductDetailsComponent } from '../ui/product-details/product-details.component';

// Import modules
import { DesignSystemModule } from '../../../design-system/design-system.module';

@NgModule({
	imports: [
		CommonModule,
		ProductShellRoutingModule,
		DesignSystemModule,
		MatDialogModule,
		MatButtonModule,
	],
	declarations: [
		ProductShellComponent,
		ProductCardComponent,
		ProductDetailsComponent,
	],
	exports: [],
})
export class ProductShellModule {}
