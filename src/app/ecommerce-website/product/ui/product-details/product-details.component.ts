import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// import interfaces
import { SelectedProduct } from '../../domain/selected.product.model';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
	constructor(
		public dialogRef: MatDialogRef<ProductDetailsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: SelectedProduct
	) {}

	onNoClick(event: boolean): void {
		this.dialogRef.close(event);
	}
}
