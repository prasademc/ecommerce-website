import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import interfaces
import { Product } from '../../domain/product.model';

// Import services
import { ProductStoreService } from '../../application/product-store.service';

@Component({
	selector: 'app-product-shell',
	templateUrl: './product-shell.component.html',
	styleUrls: ['./product-shell.component.scss'],
	providers: [ProductStoreService],
})
export class ProductShellComponent implements OnInit {
	products$!: Observable<Array<Product>>;

	constructor(private productStoreService: ProductStoreService) {}

	ngOnInit(): void {
		this.productStoreService.fetchProducts(null);
		this.products$ = this.productStoreService.products$;
	}
}
