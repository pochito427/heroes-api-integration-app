import { Component, OnInit } from '@angular/core';
import { Powerstats } from "../powerstats";
import { Appearance } from "../appearance";
import { Biography } from "../biography";
import { Work } from "../work";
import { Connections } from "../connections";
import { Images } from "../images";
import { Hero } from "../hero";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  powerstats : Powerstats = {
    intelligence: 100,
    strength: 85,
    speed: 58,
    durability: 85,
    power: 100,
    combat: 64
  };

  appearance : Appearance = {
    gender: "Male",
    race: "Human",
    height: [
      "6'6",
      "198 cm"
    ],
    weight: [
      "425 lb",
      "191 kg"
    ],
    eyeColor: "Blue",
    hairColor: "Black"
  };

  biography : Biography = {
    fullName: "Tony Stark",
    alterEgos: "No alter egos found.",
    aliases: [
      "Iron Knight",
      "Hogan Potts",
      "Spare Parts Man",
      "Cobalt Man II",
      "Crimson Dynamo",
      "Ironman"
    ],
    placeOfBirth: "Long Island, New York",
    firstAppearance: "Tales of Suspence #39 (March, 1963)",
    publisher: "Marvel Comics",
    alignment: "good"
  };

  work : Work = {
    occupation: "Inventor, Industrialist; former United States Secretary of Defense",
    base: "Seattle, Washington"
  };

  connections : Connections = {
    groupAffiliation: "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
    relatives: "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
  };

  images : Images = {
    xs: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/346-iron-man.jpg",
    sm: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/346-iron-man.jpg",
    md: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/346-iron-man.jpg",
    lg: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/346-iron-man.jpg"
  };

  hero : Hero = {
     id: 346,
    name: "Iron Man",
    slug: "346-iron-man",
    powerstats: this.powerstats,
    appearance: this.appearance,
    biography: this.biography,
    work: this.work,
    connections: this.connections,
    images: this.images,

  };

  constructor() { }

  ngOnInit() {
  }

}
