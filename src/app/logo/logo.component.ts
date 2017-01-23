import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-logo',
	templateUrl: 'logo.component.html',
	styleUrls: ['logo.component.sass', '../../assets/animate.css']
})
export class LogoComponent implements OnInit {
	
	@Output() onLogoAnimDone = new EventEmitter<boolean>();
	animDone: boolean = false;
	
	constructor() {
	}
	
	ngOnInit() {
		const polygons: Element[] = Array.from(document.querySelectorAll('.tete'));
		const effects: string[] = ['flash'];
		const svg: Element = document.querySelector('.logo');
		const lastElement: Element = document.querySelector('#last');
		let time = 1000;
		
		polygons.forEach((path) => {
			setTimeout(() => {
				let randomNumber = Math.round(Math.random() * (effects.length - 1));
				path.classList.remove('tete');
				path.classList.add('animated');
				path.classList.add(effects[randomNumber]);
				if ( path  == lastElement ) {
					console.log('Animation done');
					svg.className = 'logo-min';
					this.animDone = true;
					this.onLogoAnimDone.emit(this.animDone);
				}
			}, time);
			time += 20;
		})
	}
	
}
