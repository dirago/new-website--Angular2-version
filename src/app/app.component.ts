import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from "@angular/router";

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ 'app.component.sass' ]
} )
export class AppComponent {
	private title: string = 'Raphaël Di RAGO // Création de sites Internet';
	
	public constructor( private titleService: Title, private router: Router ) {
		this.titleService.setTitle( this.title )
	}
	
	public setTitle( newTitle: string ) {
		this.titleService.setTitle( newTitle )
	}
	
	onLogoAnimDone(done: boolean){
		done ? this.router.navigateByUrl('/portfolio') : false;
	}
}
