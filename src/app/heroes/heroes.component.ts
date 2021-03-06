import { Component, OnInit } from '@angular/core';
import { Powerstats } from "../powerstats";
import { Appearance } from "../appearance";
import { Biography } from "../biography";
import { Work } from "../work";
import { Connections } from "../connections";
import { Images } from "../images";
import { Hero } from "../hero";
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
