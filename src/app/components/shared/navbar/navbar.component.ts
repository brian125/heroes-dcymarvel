import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino:any ){
    console.log(termino.value);
    this.router.navigate(['/buscar', termino.value]);
    return false;
     
  }


  

}
