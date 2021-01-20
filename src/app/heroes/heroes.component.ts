import { MessageService } from './../message.service';

import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  constructor( private heroService: HeroService,
    private http: HttpClient,
    private messageService: MessageService) { }
  

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void{
      this.heroService.getHeroes()
        .subscribe(heroes =>this.heroes = heroes);

}
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
}
