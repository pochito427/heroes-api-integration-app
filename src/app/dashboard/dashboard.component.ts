import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes(); 
  }

  generateShuffleArray(inputArray: Hero[]){

    for (let i: number = inputArray.length - 1; i >= 0; i--){
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemAtIndex = inputArray[randomIndex];

      inputArray[randomIndex] = inputArray[i];
      inputArray[i] = itemAtIndex;
    }
    
    return inputArray;

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = this.generateShuffleArray(heroes).slice(0, 20));
  }

 


}
