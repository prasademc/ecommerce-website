import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { PriceTagComponent } from './price-tag/price-tag.component';

// Import pipes
import { RRPPipe } from '../ecommerce-website/shared/utils/rrp.pipe'

@NgModule({
	declarations: [LoadingSpinnerComponent, ButtonGroupComponent, PriceTagComponent, RRPPipe],
	imports: [CommonModule],
	exports: [LoadingSpinnerComponent, ButtonGroupComponent, PriceTagComponent, RRPPipe]
})
export class DesignSystemModule {}
