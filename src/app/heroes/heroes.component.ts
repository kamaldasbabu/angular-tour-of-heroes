
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero = 'DAD !';
  // hero: Hero = {
  //   id: 1,
  //   name: 'DAD'
  // };
  //writesomthing = '';
  // selectedHero: Hero;
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  heroes : Hero[];
  constructor( private heroService: HeroService) { }
  

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void{
      this.heroService.getHeroes()
        .subscribe(heroes =>this.heroes = heroes);

}
}
