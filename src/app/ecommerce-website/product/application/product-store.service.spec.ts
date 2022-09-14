import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

import { ProductStoreService } from './product-store.service';

describe('ProductStoreService', () => {
	let service: ProductStoreService,
		httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ProductStoreService],
		});
		service = TestBed.get(ProductStoreService);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('should retrieve all products in store', () => {
		service.products$.subscribe((products) => {
			expect(products.length).toEqual(
				0,
				'Incorrect number of products'
			);
		});
	});

	it('should retrieve all products in store cart', () => {
		service.productsInCart$.subscribe((products) => {
			expect(products.length).toEqual(
				0,
				'Incorrect number of products'
			);
		});
	});
});
