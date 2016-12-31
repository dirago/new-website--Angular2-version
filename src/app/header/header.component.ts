import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let head: Array<Element> = Array.from(document.querySelectorAll('.tete'));
    let headLength: number = document.querySelectorAll('.tete').length - 1;
    let raphaelLetters: Array<Element> = Array.from(document.querySelectorAll('.raphael'));
    let diragoLetters: Array<Element> = Array.from(document.querySelectorAll('.dirago'));
    let nav: HTMLUListElement = document.querySelector('ul');
    let lis: Array<HTMLLIElement> = Array.from(document.querySelectorAll('li'));
    enum Fade {fadeInLeft, fadeInDown, fadeInRight}

    head.forEach( (path, index) => {
      setTimeout(() => {
        path.classList.remove('tete');
        path.classList.add('animated');
        path.classList.add('fadeIn');
        if (index === headLength) {
          raphaelLetters.forEach((letter) => {
            letter.classList.remove('raphael');
            letter.classList.add('magictime');
            letter.classList.add('spaceInDown');
          });
          diragoLetters.forEach((letter) => {
            letter.classList.remove('dirago');
            letter.classList.add('magictime');
            letter.classList.add('spaceInUp');
          });
          lis.forEach((li, index) => {
            li.className = `animated ${Fade[index]}`
          })
        }
      }, 20 + index * 10);
    })
  }

}
