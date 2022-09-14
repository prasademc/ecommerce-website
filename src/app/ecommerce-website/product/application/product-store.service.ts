import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

// Import service
import { ProductService } from '../data-access/product.service';

// Import interfaces
import { ProductStore } from '../domain/product.store.model';
import { PRODUCT_INITIAL_STATE } from '../domain/product.const';
import { Product } from '../domain/product.model';
import {
	catchError,
	EMPTY,
	Observable,
	switchMap,
	tap,
	withLatestFrom,
} from 'rxjs';

@Injectable()
export class ProductStoreService extends ComponentStore<ProductStore> {
	constructor(private productService: ProductService) {
		super(PRODUCT_INITIAL_STATE);
	}

	readonly products$ = this.select((state) => state.products);
	readonly productsInCart$ = this.select((state) => state.cart);

	readonly setProducts = this.updater((state, products: Array<Product>) => ({
		...state,
		products,
	}));

	readonly setCart = this.updater((state, cart: Array<Product>) => ({
		...state,
		cart,
	}));

	readonly fetchProducts = this.effect((products$: Observable<null>) =>
		products$.pipe(
			switchMap(() =>
				this.productService.getProducts$().pipe(
					tap((products) => this.setProducts(products)),
					catchError(() => EMPTY)
				)
			)
		)
	);

	readonly updateCart = this.effect(
		(product$: Observable<{ product: Product }>) =>
			product$.pipe(
				withLatestFrom(this.productsInCart$),
				tap(([product, productsInCart]) => {
					const cart = productsInCart;
					const isItemExist = cart.filter(
						(cproduct) => cproduct.sku === product.product.sku
					);
					if (isItemExist.length <= 0) {
						cart.push(product.product);
						this.setCart(cart);
					}
				})
			)
	);
}
