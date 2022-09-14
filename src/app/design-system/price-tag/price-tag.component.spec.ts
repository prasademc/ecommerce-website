import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignSystemModule } from '../design-system.module';

import { PriceTagComponent } from './price-tag.component';

describe('PriceTagComponent', () => {
	let component: PriceTagComponent;
	let fixture: ComponentFixture<PriceTagComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DesignSystemModule],
		}).compileComponents();

		fixture = TestBed.createComponent(PriceTagComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create price tag component', () => {
		expect(component).toBeTruthy();
	});
});
