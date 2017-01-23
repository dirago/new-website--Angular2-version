import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  host: { '[@navAnimation]': "true" },
  animations: [
    trigger( 'navAnimation', [
      state( 'in', style( { transform: 'translateY(0%)' } ) ),
      transition( 'void => *', [
        style( { transform: 'translateY(-100%)' } ),
        animate( 500 )
      ] ),
      transition( '* => void', [
        animate( 500, style( { transform: 'translateY(100%)' } ) )
      ] )
    ] )
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
