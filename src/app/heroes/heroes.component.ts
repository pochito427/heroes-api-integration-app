import { Component, OnInit } from '@angular/core';
import { Powerstats } from "../powerstats";
import { Appearance } from "../appearance";
import { Biography } from "../biography";
import { Work } from "../work";
import { Connections } from "../connections";
import { Images } from "../images";
import { Hero } from "../hero";
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
