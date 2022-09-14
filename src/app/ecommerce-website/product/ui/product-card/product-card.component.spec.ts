import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductShellModule } from '../../feature/product-shell.module';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
	let component: ProductCardComponent;
	let fixture: ComponentFixture<ProductCardComponent>;
	let el: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductShellModule, HttpClientModule],
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(ProductCardComponent);
				component = fixture.componentInstance;
				el = fixture.debugElement;
				fixture.detectChanges();
			});
	});

	it('should create product card component', () => {
		fixture.detectChanges()
		expect(component).toBeTruthy();
	});

	it('should have image', () => {
		fixture.detectChanges();
		const image = component.productConfig.image;
		const domImage = el.query(By.css('img')).nativeElement;
		expect(domImage.getAttribute('src')).toEqual(image);
	});

	// it('should have title', () => {
	// 	fixture.detectChanges();
	// 	const title = component.productConfig.name;
	// 	const domTitle = el.query(By.css('p')).nativeElement.innerHtml;
	// 	expect(domTitle).toEqual(title);
	// });
});
