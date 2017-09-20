import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero }      from './hero';
import { HEROES }    from './mock-heroes';
import { HeroService } from './hero-service';

@Component({
  selector: 'my-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})


export class HeroComponent implements OnInit {
  title = 'A Tour Of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  constructor(private heroService: HeroService,
              private router: Router
  ) {};
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  };
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 }

