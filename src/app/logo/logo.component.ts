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
		const effects: string[] = ['flash', 'zoomIn', 'flipInX', 'pulse', 'fadeIn' ];
		const svg: Element = document.querySelector('.logo');
		let counter = 0;
		polygons.forEach((p, index) => {
			setTimeout(() => {
				let randomNumber = Math.round(Math.random() * (effects.length - 1));
				p.classList.remove('tete');
				p.classList.add('animated');
				p.classList.add(effects[randomNumber]);
				counter++;
				if (index == polygons.length - 1 ) {
					setTimeout(() => {
						console.log('Animation done');
						svg.className = 'logo-min';
						this.animDone = true;
						this.onLogoAnimDone.emit(this.animDone);
					}, 2000)
				}
			}, 50);
		})
	}
	
}
