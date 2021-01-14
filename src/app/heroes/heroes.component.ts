import { HEROES } from '../monk-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
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
  heroes = HEROES;
  
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
