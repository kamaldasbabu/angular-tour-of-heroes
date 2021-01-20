import { MessageService } from './message.service';
import { Hero } from './hero';
import { HEROES } from './monk-heroes';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private heroesUrl = 'api/heroes';  
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fatched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
