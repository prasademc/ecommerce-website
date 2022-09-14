import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

// import interfaces
import { IButton } from '../../domain/button.model';
import { PRODUCT_INITIAL } from '../../domain/product.const';
import { Product } from '../../domain/product.model';
import { SelectedProduct } from '../../domain/selected.product.model';

// Import services
import { ProductStoreService } from '../../application/product-store.service';

// import component
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ProductStoreService],
})
export class ProductCardComponent implements OnChanges, OnInit, OnDestroy {
	@Input() productConfig: Product = PRODUCT_INITIAL;
	productsInCart$!: Observable<Array<Product>>;
	subscription = new Subscription();

	buttons: Array<IButton> = [
		{
			action: 'add-to-cart',
			text: 'Add to Cart',
			cssClassName: 'primary',
		},
		{
			action: 'compare',
			text: 'Compare',
			cssClassName: 'secondry',
		},
	];

	constructor(
		private productStoreService: ProductStoreService,
		public dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.productsInCart$ = this.productStoreService.productsInCart$;
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.productConfig =
			changes['productConfig'].currentValue ?? this.productConfig;
	}

	ngOnDestroy(): void {
		if (this.subscription) this.subscription.unsubscribe();
	}

	public onclickHandler(action: string): void {
		switch (action) {
			case 'add-to-cart':
				this.openDialog();
				this.productStoreService.updateCart({
					product: this.productConfig,
				});
				this.subscription.add(
					this.productsInCart$
						.pipe(
							tap((items) =>
								console.log('Products in the cart: ', items)
							)
						)
						.subscribe()
				);
				break;
			case 'compare':
				break;
			default:
				break;
		}
	}

	private openDialog(): void {
		const dialogRef = this.dialog.open(ProductDetailsComponent, {
			width: '550px',
			data: { product: this.productConfig },
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(result);
		});
	}
}
