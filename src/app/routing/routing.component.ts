import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { PgHomeComponent } from '../pg-home/pg-home.component';



const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: PgHomeComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []	
})
export class RoutingModule {}