import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rrp',
})
export class RRPPipe implements PipeTransform {
	transform(value: number, ...args: Array<number>): string {
		const rrp = value;
		const price = args[0];
		const offValue = rrp - price;

		return `$${offValue} off RRP of $${rrp}`;
	}
}
