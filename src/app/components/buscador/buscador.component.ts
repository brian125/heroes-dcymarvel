import { HeroesService } from 'src/app/services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino!: string;

  constructor( private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private router:Router) {}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.termino  = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
      
    } )
  }

  verHeroe( index:number){
    this.router.navigate( ['/heroe', index] )
  }

}
