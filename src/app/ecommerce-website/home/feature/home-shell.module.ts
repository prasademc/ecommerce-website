import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeShellRoutingModule } from './home-shell-routing.module';
import { HomeShellComponent } from './home-shell/home-shell.component';

@NgModule({
	imports: [CommonModule, HomeShellRoutingModule],
	declarations: [HomeShellComponent],
})
export class HomeShellModule {}
