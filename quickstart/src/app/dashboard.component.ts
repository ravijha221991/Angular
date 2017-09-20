import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero-service';

@Component({
    selector: 'my-dashboard',
    template: '<h3> My Dashboard </h3>',
    providers: [ HeroService ]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes.slice(1, 5));
    }
}
