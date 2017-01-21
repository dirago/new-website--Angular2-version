import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';

@Component( {
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: [ './portfolio.component.sass' ],
	host: { '[@routeAnimation]': "true" },
	animations: [
		trigger( 'routeAnimation', [
			state( 'in', style( { opacity: 0.5 } ) ),
			transition( 'void => *', [
				style( { opacity: 0 } ),
				animate( 1000 )
			] ),
			transition( '* => void', [
				animate( 1000, style( { opacity: 1 } ) )
			] )
		] )
	]
} )
export class PortfolioComponent implements OnInit {
	
	constructor() {
	}
	
	ngOnInit() {
	}
	
}
