import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignSystemModule } from '../design-system.module';

import { ButtonGroupComponent } from './button-group.component';

describe('ButtonGroupComponent', () => {
	let component: ButtonGroupComponent;
	let fixture: ComponentFixture<ButtonGroupComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DesignSystemModule],
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(ButtonGroupComponent);
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create component', () => {
		expect(component).toBeTruthy();
	});
});
